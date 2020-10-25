import { FontFamily } from './FontFamily';

export class Settings {
    fontFamily: FontFamily;
    constructor(init: Partial<Settings>){
        Object.assign(this, init);
    }
    toObject(){
        return {fontFamily: this.fontFamily && this.fontFamily.toObject() || null};
    }

    static fromObject(settings: Settings): Settings{
        return new Settings(settings);
    }
}