import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Review } from 'src/types';

@Component({
  selector: 'app-leave-areview',
  templateUrl: './leave-areview.component.html',
  styleUrls: ['./leave-areview.component.scss'],
})
export class LeaveAReviewComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<LeaveAReviewComponent, Review>) {}

  review: Review = {
    stars: 0,
    message: null,
  };

  clicked: boolean = false;
  static: boolean = false;

  ngOnInit(): void {}
  close() {
    this.dialogRef.close(null);
  }

  submit() {
    this.dialogRef.close(this.review);
  }

  handleStarsClick(star: number) {
    this.review.stars = star;
    this.clicked = true;
  }

  handleStarsHover(star: number) {
    this.review.stars = star;
    this.clicked = true;
  }
}
