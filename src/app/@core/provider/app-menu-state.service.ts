import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppMenuStateService {
  private _state: boolean = true;
  private _menuState: BehaviorSubject<boolean>;
  constructor() {
    this._menuState = new BehaviorSubject(this._state);
  }

  toogleState(): void {
    this._state = !this._state;
    this._menuState.next(this._state);
  }

  open(): void {
    this._state = true;
    this._menuState.next(this._state);
  }

  close(): void {
    this._state = false;
    this._menuState.next(this._state);
  }

  get onStateChange(): Observable<boolean> {
    return this._menuState;
  }
}
