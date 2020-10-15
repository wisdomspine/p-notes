import { Injectable } from '@angular/core';
import { Review } from 'src/types';
import { AppDialogService } from './app-dialog.service';

@Injectable({
  providedIn: 'root',
})
export class ConductReviewService {
  constructor(private dialogService: AppDialogService) {}

  startReview(): void {
    this.dialogService.startReview().subscribe((review: Review) => {
      this.dialogService.showReviewAppreciation();
    });
  }
}
