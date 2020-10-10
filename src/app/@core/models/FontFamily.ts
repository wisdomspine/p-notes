export class FontFamily {
  name?: String;
  value?: String;
  ulr?: String;
  constructor(init: FontFamily) {
    Object.assign(this, init);
  }
}
