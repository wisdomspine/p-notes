import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Review } from 'src/types';

@Component({
  selector: 'app-review-appreciation',
  templateUrl: './review-appreciation.component.html',
  styleUrls: ['./review-appreciation.component.scss'],
})
export class ReviewAppreciationComponent implements OnInit, AfterViewInit {
  //milliseconds before automatic closing of dialog
  private timeout: number = 15000;
  constructor(
    private dialogRef: MatDialogRef<ReviewAppreciationComponent, any>
  ) {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.close();
    }, this.timeout);
  }

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }
}
