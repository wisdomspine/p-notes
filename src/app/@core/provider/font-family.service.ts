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
    }),
    new FontFamily({
      name: 'Courier Prime',
      value: 'Courier Prime',
    }),
    new FontFamily({
      name: 'Great Vibes',
      value: 'Great Vibes',
    }),
    new FontFamily({
      name: 'Overlock',
      value: 'Overlock',
    }),
    new FontFamily({
      name: 'Peddana',
      value: 'Peddana',
    }),
    new FontFamily({
      name: 'Roboto',
      value: 'Roboto',
    }),
  ];
  constructor() {}

  get default(): FontFamily {
    return this.families[0];
  }

  get all(): FontFamily[] {
    return this.families;
  }

  isEqual(font1: FontFamily, font2: FontFamily): boolean {
    return font1 && font2 && font1.value == font2.value;
  }
}
