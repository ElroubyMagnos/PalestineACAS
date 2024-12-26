import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbsigninComponent } from './dbsignin/dbsignin.component';
import { StudentsigninComponent } from './studentsignin/studentsignin.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TeacherComponent } from './teacher/teacher.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DbsigninComponent,
    StudentsigninComponent,
    MainComponent,
    TeacherComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MainComponent },
      { path: 'dbsi', component: DbsigninComponent },
      { path: 'studentsi', component: StudentsigninComponent },
      { path: 'teachersi', component: TeacherComponent }
    ]),
    FormsModule
  ],
  exports: [
    DbsigninComponent,
    StudentsigninComponent
  ]
})
export class AuthModule { }
