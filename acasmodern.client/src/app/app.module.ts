import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticlesModule } from './particles/particles.module';
import { maininterInterceptor } from './maininter.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [provideHttpClient(
    withInterceptors([
      maininterInterceptor
    ])
  )],
  bootstrap: [AppComponent]
})
export class AppModule { }
