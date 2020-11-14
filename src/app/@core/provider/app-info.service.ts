import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Link } from 'src/types';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AppInfoService {
  private _name: BehaviorSubject<String> = new BehaviorSubject<String>(
    'p-note'
  );
  constructor() {}

  get name(): Observable<String> {
    return this._name;
  }

  get author(): Observable<Link>{
    return of({link: 'https://twitter.com/SaboPriest', text: '@SaboPriest'});
  }
}
