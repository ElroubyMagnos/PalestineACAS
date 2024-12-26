import { Component, EventEmitter, Output } from '@angular/core';
import { StudentRequest } from '../../../models/studentrequest';
import { HttpClient } from '@angular/common/http';
import { ListContent } from '../../../models/listcontent';
import { LinkerService } from '../../../linker.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { first, firstValueFrom, identity } from 'rxjs';
import { StudentDadRequest } from '../../../models/studentdadrequest';

@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styleUrl: './new-students.component.css'
})
export class NewStudentsComponent {
  TakhsosListOf: ListContent[] = [];
  AllStudentsRequests: StudentRequest[] = [];

  CurrentDad!: StudentDadRequest;
  ShowDad(student: StudentRequest)
  {
    this.CurrentDad = student.studentDadClass;

    if (this.CurrentDad)
    {
      this.openModal();
    }
    else this.toast.error('لا يمكن التعرف علي ولي الامر هذا');
  }

  async SaveDad()
  {
    var waitfor = await firstValueFrom(this.http.post<boolean>(`/Students/UpdateStudentDadInfo/`, this.CurrentDad));

    if (waitfor)
    {
      this.toast.success("تم تغير البيانات بنجاح");
    }
    else this.toast.error("خطأ في تغير البيانات");
  }

  async Delete(studentreq: StudentRequest)
  {
    var waitfor = await firstValueFrom(this.http.delete<boolean>(`/Students/DeleteRequestedStudent/${studentreq.id}/`));

    if (waitfor)
    {
      this.AllStudentsRequests.splice(this.AllStudentsRequests.indexOf(studentreq), 1);

      this.toast.success("تم الحذف بنجاح");
    }
    else this.toast.error("لا استطيع حذف هذا");
  }

  PictureChanged(identitypic: HTMLInputElement, imgofidentity: HTMLImageElement)
  {
    if (identitypic.files && identitypic.files.length > 0)
    {
      imgofidentity.src = URL.createObjectURL(identitypic.files[0]);
    }
  }

  async UpdateSelected(f: NgForm)
  {
    if (f.valid && this.SelectedStudent)
    {
      var WaitFor = await firstValueFrom(this.http.put<boolean>(`/Students/EditStudentRequest/`, this.SelectedStudent));

      alert(WaitFor);
    }
    else this.toast.error('لا يمكن حفظ شئ');
  }

  SelectedStudent!: StudentRequest | null;
  constructor(private http: HttpClient, private linker: LinkerService, private toast: ToastrService)
  {
    this.http.get<StudentRequest[]>(`/Students/GetNewStudents/`)
    .subscribe(x => this.AllStudentsRequests = x);

    this.Loading();
  }
  
  async Loading()
  {
    this.TakhsosListOf = await this.linker.GetListOf('Takhsos');
  }

  isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
