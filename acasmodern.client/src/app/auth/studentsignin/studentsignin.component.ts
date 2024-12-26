import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-studentsignin',
  templateUrl: './studentsignin.component.html',
  styleUrl: './studentsignin.component.css'
})
export class StudentsigninComponent {
  async LoginAsStudent(f: NgForm)
  {
    var GetToken = await firstValueFrom(this.http.post(`/Login/GetStudentToken/`, f.value, {responseType: 'text'}));

    if (!GetToken)
    {
      this.toast.error("لا يمكن تسجيل الدخول الان");

      localStorage.clear();
    }
    else 
    {
      localStorage.setItem('Token', GetToken);

      this.toast.success("تم تسجيل الدخول بنجاح");

      this.router.navigate(['/']);
    }
  }

  constructor(private http: HttpClient, private toast: ToastrService, private router: Router)
  {

  }
}
