import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LinkerService } from './linker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public linker: LinkerService)
  {

  }
}
