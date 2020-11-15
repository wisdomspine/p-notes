import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppUser, Review } from 'src/types';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private user: AppUser;

  constructor(
    private fireStore: AngularFirestore,
    accountService: AccountService,
  ) { 
    accountService.currentAccount.subscribe(u => {
      this.user = u;
    })
  }

  createReview(review){
    return this.fireStore.collection<Review>(`${this.path}`).add(review);
  }

  private get path(): String{
    return `reviews/${this.user.uid}/reviews/`;
  }
}
