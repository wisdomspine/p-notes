export class FontFamily {
  name?: String;
  value?: String;
  ulr?: String;
  constructor(init: Partial<FontFamily>) {
    Object.assign(this, init);
  }

  toObject(): object{
    return {name: this.name+'', value: this.value+'', url: this.ulr+''};
  }

  static fromObject(family: FontFamily): FontFamily{
    return new FontFamily(family);
  }
}
