import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  images: Photo[];
  constructor() {
    this.images = [
      {
        previewImageSrc: '../../assets/img/business1.jpg',
        thumbnailImageSrc: '../../assets/img/business1.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        previewImageSrc: '../../assets/img/business2.jpg',
        thumbnailImageSrc: './../assets/img/business2.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        previewImageSrc: '../../assets/img/business3.jpg',
        thumbnailImageSrc: '../../assets/img/business3.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
      {
        previewImageSrc: '../../assets/img/business1.jpg',
        thumbnailImageSrc: '../../assets/img/business1.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
    ];
  }

  public getImages(): Photo[] {
    return this.images;
  }
}
