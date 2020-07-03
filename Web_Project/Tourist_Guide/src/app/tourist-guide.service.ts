import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TouristGuideService {
  googleAPIKey = 'AIzaSyCoxh7yi4R1zPaauMicbkDMYOFbRl47fG4';
  touristPlaces: [];
  candidates: [];
  placeId: any;
  reviews: [];

  constructor(private http: HttpClient) { }
  getTouristPlaces(place: string ) {
    const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?' +
        'query=' + place + '+point+of+interest&language=en&key=' + this.googleAPIKey;
    this.http.get('https://cors-anywhere.herokuapp.com/' + url).subscribe((resp) => {
      console.log('returned json place id is', resp['results']);
      this.touristPlaces = resp['results'];
      console.log('places array', this.touristPlaces);
      return this.touristPlaces;
    });
  }
  getPlaceId(place: string) {
    console.log('place', place);
    const placeUrl = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + place + '&inputtype=textquery&key=' + this.googleAPIKey;
    console.log('placeid url is', placeUrl);
    this.http.get('https://cors-anywhere.herokuapp.com/' + placeUrl).subscribe((resp) => {
      this.candidates = resp['candidates'];
      this.placeId = resp['candidates'][0].place_id;
      console.log('candidates', this.candidates);
      console.log('returned json place id is', resp);
      console.log('placeid:', resp['candidates'][0].place_id);
      const reviewsUrl = 'https://maps.googleapis.com/maps/api/place/details/json?key=' + this.googleAPIKey + '&placeid=' + this.placeId;
      console.log('review url', reviewsUrl);
      this.http.get('https://cors-anywhere.herokuapp.com/' + reviewsUrl).subscribe((resp1) => {
        console.log('returned json reviews is', resp1);
      });
    });
  }
  getReviews() {
    const reviewsUrl = 'https://maps.googleapis.com/maps/api/place/details/' +
        'json?key=' + this.googleAPIKey + '&placeid=' + this.placeId;
    console.log('review url', reviewsUrl);
    this.http.get('https://cors-anywhere.herokuapp.com/' + reviewsUrl).subscribe((resp) => {
      console.log('returned json reviews is', resp);
    });
  }


}
