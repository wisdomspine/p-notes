import { Injectable } from '@angular/core';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';
import { CSSUnit } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class AppMediaQueryService {
  private _screenWatcher: BehaviorSubject<boolean>;

  constructor(
    private mediaMatcher: MediaMatcher,
    observer: BreakpointObserver
  ) {
    this._screenWatcher = new BehaviorSubject(
      observer.isMatched(
        `(max-width: ${AppMediaQueryService.maxSmallScreenSizeToUnit()})`
      )
    );
    mediaMatcher
      .matchMedia(
        `(max-width: ${AppMediaQueryService.maxSmallScreenSizeToUnit()})`
      )
      .addEventListener('change', (event) => {
        this._screenWatcher.next(event.matches);
      });
  }
  get isSmallScreen(): Observable<boolean> {
    return this._screenWatcher;
  }

  static get maxSmallScreenSize(): number {
    return 599;
  }

  static maxSmallScreenSizeToUnit(unit: CSSUnit = 'px'): string {
    return `670${unit}`;
  }
}
