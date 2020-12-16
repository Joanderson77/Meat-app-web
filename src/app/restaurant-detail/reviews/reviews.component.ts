import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurant/restaurants.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor( private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.reviews = this.restaurantsService.reviewsOfRestaraunt(this.route.parent.snapshot.params['id'])
  }

}