import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { LinkerService } from '../../linker.service';
import { firstValueFrom } from 'rxjs';
import { ListContent } from '../../models/listcontent';

@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.component.html',
  styleUrl: './newrequest.component.css'
})
export class NewrequestComponent {
  TakhsosListOf: ListContent[] = [];
  FamilyEarnsListOf: ListContent[] = [];
  SecondaryTypeListOf: ListContent[] = [];
  AddressListOf: ListContent[] = [];
  CodeOfStudent: string = this.GenerateTheYearAndNext() + this.GenerateLearningYear();

  GenerateTheYearAndNext()
  {
    var CurrentYear = new Date().getFullYear();
    var NextYear = CurrentYear + 1;

    var CurrentYearString = CurrentYear.toString();
    var NextYearString = NextYear.toString();

    return `${CurrentYearString[2]}${CurrentYearString[3]}${NextYearString[3]}`;
  }

  GenerateLearningYear()
  {
    var Month = new Date().getMonth();

    if (Month >= 9)
    {
      return 1;
    }
    else if (Month >= 2 && Month <= 5)
    {
      return 2;
    }
    else if (Month >= 7 && Month <= 8)
    {
      return 3;
    }

    return 0;
  }

  constructor(private http: HttpClient, private toast: ToastrService, private linker: LinkerService)
  {
    this.LoadAllFromDB();
  }

  async LoadAllFromDB()
  {
    this.TakhsosListOf = await this.linker.GetListOf('Takhsos');
    this.FamilyEarnsListOf = await this.linker.GetListOf('OsraDakhl');
    this.SecondaryTypeListOf = await this.linker.GetListOf('Secondary');
    this.AddressListOf = await this.linker.GetListOf('Address');
  }

  ChangePicture(upload: HTMLInputElement, img: HTMLImageElement)
  {
    if (upload.files && upload.files.length > 0)
    {
      img.src = URL.createObjectURL(upload.files[0]);
    }
  }

  ContainsArabic: boolean = false;
  checkForArabic(value: string): void {
    const arabicRegex = /[\u0600-\u06FF]/; // نطاق الحروف العربية
    this.ContainsArabic = arabicRegex.test(value);
  }

  async SubmitDadFields(dadf: NgForm)
  {
    if (this.StudentRequestID === 0)
    {
      this.toast.error("لم يرجع بيان ناجح للمسجل الخاص بالطالب سابقاً");
      return;
    }

    this.linker.showloadingscreen = true;

    var getbool = await firstValueFrom(this.http.post<boolean>(`/Base/SubmitDadForm/`, 
      {
        DadName: dadf.value.DadName,
        DadPhone: dadf.value.DadPhone,
        DadJob: dadf.value.DadJob,
        DadSocialState: dadf.value.DadSocialState,
        StudentRequestID: this.StudentRequestID
      }
    ));
    
    if (getbool)
    {
      this.toast.success('تم تسجيل بيانات ولي الامر بنجاح');
      dadf.reset();
    }
    else this.toast.error("اسف لم استطع تسجيل البيانات");

    this.linker.showloadingscreen = false;
  }

  ShowDadInfoFill(btn: HTMLButtonElement)
  {
    btn.click();
  }

  StudentRequestID: number = 0;

  SendStudent(f: NgForm, identity: HTMLInputElement, certificate: HTMLInputElement, born: HTMLInputElement, self: HTMLInputElement, dadinfofill: HTMLButtonElement)
  {
    if (f.valid 
      && self.files && self.files.length > 0
      && born.files && born.files.length > 0
      && identity.files && identity.files.length > 0
      && certificate.files && certificate.files.length > 0
    )
    {
      this.linker.showloadingscreen = true;

      if (this.ContainsArabic)
      {
        this.linker.showloadingscreen = false;
        
        this.toast.error('انتباه: لقد كتبت باللغة العربية في حقل يقبل الانجليزية فقط');

        return;
      }

      if (identity.files[0].size > 4 * 1024 * 1024) 
      {
        this.linker.showloadingscreen = false;

        this.toast.error('حجم صورة الهوية اكثر من 4 ميجا بايت');

        return;
      } 
      
      if (certificate.files[0].size > 4 * 1024 * 1024) 
      {
        this.linker.showloadingscreen = false;

        this.toast.error('حجم صورة الشهادة اكثر من 4 ميجا بايت');

        return;
      } 
      
      if (born.files[0].size > 4 * 1024 * 1024) 
      {
        this.linker.showloadingscreen = false;

        this.toast.error('حجم صورة شهادة الميلاد اكثر من 4 ميجا بايت');

        return;
      } 
      
      if (self.files[0].size > 4 * 1024 * 1024) 
      {
        this.linker.showloadingscreen = false;

        this.toast.error('صورة الطالب الشخصية حجمها اكثر من 4 ميجا بايت');

        return;
      } 
      
      var fd = new FormData();

      fd.append('Data', JSON.stringify(f.value));
      fd.append('identity', identity.files[0]);
      fd.append('certificate', certificate.files[0]);
      fd.append('born', born.files[0]);
      fd.append('self', self.files[0]);

      this.http.post<number>(`/Base/SendNewStudent/`,
        fd
      ).subscribe(
        {
          next: (x) =>
          {
            this.toast.success("تم ارسال الطلب بنجاح");

            this.StudentRequestID = x;

            if (x > 0)
            {
              this.ShowDadInfoFill(dadinfofill);
            }
            else this.toast.error("لم يرجع بيان ناجح");
          },
          error: () =>
          {
            this.toast.error("حدث خطا ما في الخادم");
          },
          complete: () =>
          {
            this.linker.showloadingscreen = false;
            f.reset();
          }
        }
      );
    }
    else this.toast.error("لا يمكنني ارسال البيانات");
  }
}
