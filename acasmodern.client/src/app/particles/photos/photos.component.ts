import { AfterViewChecked, AfterViewInit, Component, ContentChildren, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { LinkerService } from '../../linker.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements AfterViewChecked {
  viewCheckedCounter = 0; // عداد لاستدعاءات ngAfterViewChecked
  lastRunTimeout: any;
  CurrentImages: HTMLImageElement[] = [];
  ImgCollection!: HTMLCollectionOf<HTMLImageElement>;

  constructor(public linker: LinkerService)
  {
    
  }

  onFinalAfterViewChecked()
  {
    if (!this.ImgCollection || (this.ImgCollection && this.ImgCollection.length === 0))
    {
      this.ImgCollection = document.getElementsByClassName('simg') as HTMLCollectionOf<HTMLImageElement>;

      for (let i = 0; i < this.ImgCollection.length; i++) 
      {
        this.CurrentImages.push(this.ImgCollection[i]);

        this.ImgCollection[i].onclick = () =>
        {
          this.openViewer(i);
        };
      }
    }
  }

  ngAfterViewChecked()
  {
    this.viewCheckedCounter++;

    if (this.lastRunTimeout) 
    {
      clearTimeout(this.lastRunTimeout);
    }

    this.lastRunTimeout = setTimeout(() => 
    {
      this.onFinalAfterViewChecked();
    }, 500); 
  }

  currentIndex: number = 0;
  @Input() isViewerOpen: boolean = false;

  openViewer(index: number) {
    this.currentIndex = index;
    this.isViewerOpen = true;
  }

  closeViewer() {
    this.isViewerOpen = false;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.CurrentImages.length - 1;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex < this.CurrentImages.length - 1) ? this.currentIndex + 1 : 0;
  }
}
