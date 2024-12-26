import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditlistsComponent } from './editlists/editlists.component';
import { EditstudentsComponent } from './editstudents/editstudents.component';
import { RouterModule } from '@angular/router';
import { NewStudentsComponent } from './editstudents/new-students/new-students.component';
import { NowStudentsComponent } from './editstudents/now-students/now-students.component';
import { DadsOfStudentsComponent } from './editstudents/dads-of-students/dads-of-students.component';
import { DateFormatPipe } from '../pipes/date-format.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditlistsComponent,
    EditstudentsComponent,
    NewStudentsComponent,
    NowStudentsComponent,
    DadsOfStudentsComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { 
        path: '', component: EditstudentsComponent, 
        children: [
          { path: 'New', component: NewStudentsComponent },
          { path: 'Now', component: NowStudentsComponent },
          { path: 'Dads', component: DadsOfStudentsComponent }
        ] 
      }
    ])
  ],
  exports: [
    EditlistsComponent,
    EditstudentsComponent
  ]
})
export class DashboardModule { }
