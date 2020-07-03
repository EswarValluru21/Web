import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from './recipe';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList: [];
  recipeList: [];
  ingredients: [];
  clientId = 'VUDK4HAUOT5H3F0ZUSREVWUK13FXM21BAG5O3ADZFDWHGHP1';
  clientSecret = 'R4UI1P41LLT4FB5IPUUBQI0EAFCIMK1PDVYYVRYWJHTPTXBO';
  app_id = '783dd51f';
  app_key = 'c832939218ef631f18ec8087c3c4a2d3';
  currentLat: any;
  currentLong: any;
  geolocationPosition: any;
  public ingredientLines: [];
  searchRecipeForm: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      });
  }

  getVenues() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      });

    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;
    console.log('lat', this.currentLat);

    if (this.recipeValue !== null) {
      // tslint:disable-next-line:max-line-length
      const url = 'https://api.foursquare.com/v2/venues/search?client_id=' + this.clientId + '&client_secret=' + this.clientSecret + '&v=20190425&ll=' + this.currentLat + ',' + this.currentLong + '&intent=checkin&radius=10000&query=' + this.recipeValue + '&near=' + this.placeValue;
      this.http.get(url).subscribe((resp) => {
        this.venueList = resp["response"];
        this.venueList = this.venueList["venues"];
        console.log('returned json is', this.venueList);
      });

      const url1 = 'https://api.edamam.com/search?q=' + this.recipeValue + '&app_id=' + this.app_id + '&app_key=' + this.app_key;
      this.http.get(url1).subscribe((resp1) => {
        this.recipeList = resp1["hits"];
        /*this.recipeList.map(oneRecipe =>{
         console.log('one recipe', oneRecipe);
          const recipe = {
            ingredients: oneRecipe["recipe"]["ingredientLines"].slice(0,4)
          }
          console.log('lines', recipe.ingredients);
          this.ingredientLines.push(recipe.ingredients);
        })
        console.log('ingredient');*/
        console.log('returned json is edamam : ', this.recipeList);
      });
    }

    if (this.placeValue != null && this.placeValue !== '' && this.recipeValue != null && this.recipeValue !== '') {
    }
  }
}
