import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListContent } from './models/listcontent';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkerService {
  ImgViewerOpen = false;

  public showloadingscreen: boolean = false;

  constructor(private http: HttpClient) { }

  async GetListOf(str: string) : Promise<ListContent[]>
  {
    return await firstValueFrom(this.http.get<ListContent[]>(`/Base/GetListOf/${str}/`));
  }
}
