import { Injectable } from '@angular/core';
import { Review } from 'src/types';
import { AppDialogService } from './app-dialog.service';
import { ReviewService } from './review.service';

@Injectable({
  providedIn: 'root',
})
export class ConductReviewService {
  constructor(
    private dialogService: AppDialogService,
    private reviewService: ReviewService,
  ) {}

  startReview(): void {
    this.dialogService.startReview().subscribe((review: Review) => {
      if (review){
        this.reviewService.createReview(review).then(e => {
          this.dialogService.showReviewAppreciation()
        });
      };
    });
  }
}
