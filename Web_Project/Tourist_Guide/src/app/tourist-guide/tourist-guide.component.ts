import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TouristGuideService} from '../tourist-guide.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tourist-guide',
  templateUrl: './tourist-guide.component.html',
  styleUrls: ['./tourist-guide.component.css']
})
export class TouristGuideComponent implements OnInit {
  @ViewChild('place') places: ElementRef;
  place: any;
  placeName: any;
  touristForm: FormGroup;
  reviews: [];
  touristPlaces: [];
  photos: any;
  photoref: string;
  name: any;
  googleAPIKey = 'AIzaSyCoxh7yi4R1zPaauMicbkDMYOFbRl47fG4';

  constructor(private touristSrvc: TouristGuideService, private formBuilder: FormBuilder, private http: HttpClient) {
      this.name = localStorage.getItem('name');
      console.log('name', this.name);
  }

  ngOnInit() {
    this.touristForm = this.formBuilder.group({
      'place': [null, Validators.required]
    });
  }
  onFormSubmit(form: NgForm) {
  }
  getTouristPlaces() {
    this.place = this.places.nativeElement.value;
    let they = this;
      const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?' +
          'query=' + this.place + '+point+of+interest&language=en&key=' + this.googleAPIKey;
      this.http.get('https://cors-anywhere.herokuapp.com/' + url).subscribe((resp) => {
          console.log('returned json place id is', resp['results']);
          console.log('place name', this.placeName);
          this.touristPlaces = resp['results'];
          return this.touristPlaces;
      });
  }

  getPhotos(placeName: any) {
        const urlp = 'https://pixabay.com/api/?key=17306518-3a8752f8be0a577aebefa8f1e&q=' + placeName + '&image_type=photo';
        this.http.get('https://cors-anywhere.herokuapp.com/' + urlp).subscribe((resp) => {
            console.log('resp', resp);
            console.log('returned json photos is', JSON.parse(JSON.stringify(resp['hits'][0])).previewURL);
            const he = JSON.parse(JSON.stringify(resp['hits'][0])).previewURL;
            this.photos = he;
            return he;
        });
    }

    getReviews(placeId: string, placepName: string) {
      this.getPhotos(placepName);
        const reviewsUrl = 'https://maps.googleapis.com/maps/api/place/details/' +
            'json?key=' + this.googleAPIKey + '&placeid=' + placeId;
        console.log('review url', reviewsUrl);
        this.http.get('https://cors-anywhere.herokuapp.com/' + reviewsUrl).subscribe((resp) => {
            console.log('returned json reviews is', resp);
            console.log('reviews', resp['result']);
            this.reviews = resp['result']['reviews'];
            console.log('reviews', this.reviews);
        });
  }

}
