import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewrequestComponent } from './newrequest/newrequest.component';
import { RouterModule } from '@angular/router';
import { ParticlesModule } from "../particles/particles.module";
import { FormsModule } from "@angular/forms"



@NgModule({
  declarations: [
    NewrequestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
        { path: '', component: NewrequestComponent }
    ]),
    ParticlesModule
]
})
export class StudentsModule { }
