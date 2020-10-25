import { Injectable } from '@angular/core';
import { FontFamily } from '../models/FontFamily';

@Injectable({
  providedIn: 'root',
})
export class FontFamilyService {
  private families: FontFamily[] = [
    new FontFamily({
      name: 'Default',
      value: 'Roboto',
      ulr:
        'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap',
    }),
    new FontFamily({
      name: 'Courier Prime',
      value: 'Courier Prime',
      ulr: 'https://fonts.googleapis.com/css?family=Courier%20Prime',
    }),
    new FontFamily({
      name: 'Chilanka',
      value: 'Chilanka',
      ulr: 'https://fonts.googleapis.com/css?family=Chilanka',
    }),
    new FontFamily({
      name: 'Overlock',
      value: 'Overlock',
      ulr: 'https://fonts.googleapis.com/css?family=Overlock',
    }),
    new FontFamily({
      name: 'Roboto',
      value: 'Roboto',
      ulr:
        'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap',
    }),
    new FontFamily({
      name: 'Roboto Slab',
      value: 'Roboto Slab',
      ulr: 'https://fonts.googleapis.com/css?family=Roboto+Slab',
    }),
  ];
  constructor() {}

  get default(): FontFamily {
    return this.families[2];
  }

  get all(): FontFamily[] {
    return this.families;
  }

  isEqual(font1: FontFamily, font2: FontFamily): boolean {
    return font1 && font2 && font1.value == font2.value;
  }
}
