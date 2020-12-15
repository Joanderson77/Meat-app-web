import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Restaurant } from "./restaurant.model";
import {MEAT_API} from 'app/app.api'
import { Observable } from 'rxjs/Observable';
import { ErrorHandle } from 'app/app.error.handler';


@Injectable()
export class RestaurantsService{


    
    constructor(private http:Http){}

    restaurants(): Observable <Restaurant[]>{
      return this.http.get(`${MEAT_API}/restaurants`)
      .map( response => response.json())
      .catch(ErrorHandle.handleError)
        
    }

    restaurantById(id: string): Observable<Restaurant>{
      return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map( response => response.json())
      .catch(ErrorHandle.handleError)
    }

}