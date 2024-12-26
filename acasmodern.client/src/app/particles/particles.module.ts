import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ImportantComponent } from './important/important.component';
import { LoadingComponent } from './loading/loading.component';
import { PhotosComponent } from './photos/photos.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ImportantComponent,
    LoadingComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ImportantComponent,
    LoadingComponent,
    PhotosComponent
  ]
})
export class ParticlesModule { }
