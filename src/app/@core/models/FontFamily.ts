export class FontFamily {
  name?: String;
  value?: String;
  constructor(init: FontFamily) {
    Object.assign(this, init);
  }
}
