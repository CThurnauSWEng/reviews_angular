import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params, Router} from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  /*
  id : any;
  restaurantDataAvailable = false;
  restaurant: any;
  errorsPresent = false;
  errorMessage = "";
  error1Present = false;
  error2Present = false;
  error1Message = "";
  error2Message = "";
  url_string: any;
  */

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    /*
    // get the data to display in edit form
    console.log("this.error1Present: ", this.error1Present);
    console.log("this.error2Present: ", this.error2Present);
    console.log("this.error1Message: ", this.error1Present);
    console.log("this.error2Message: ", this.error2Present);
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log("in ngONInit in Edit Component, id: ", this.id);
      this.restaurantDataAvailable = false;

      let observable = this._httpService.getRestaurantById(this.id);
      observable.subscribe(data => {
        console.log("data from service: ", data);
        this.restaurant = data;
        console.log("in componenet here 1: this.restaurant: ", this.restaurant)
        this.restaurantDataAvailable = true;
      });
    })
    */
  }

  onSubmit(e){
    /*
    console.log("this method does the update, event: ", e)
    console.log("Task Id: ", e['target']['parentElement']['id']);
    console.log("in onSubmit: restaurant: ", this.restaurant);
    let id = this.restaurant['data'][0]['_id'];
    this.errorsPresent = false;
    this.error1Present = false;
    this.error2Present = false;
    this.validateData(this.restaurant['data'][0]['name'],this.restaurant['data'][0]['cuisine']);
    console.log("this.error1Present: ", this.error1Present);
    console.log("this.error2Present: ", this.error2Present);
    if (this.error1Present || this.error2Present){
      console.log("Here 1");
      this.url_string = '/edit/' + id;
      console.log("url_string: ",this.url_string);
      // this._router.navigate(this.url_string);
    } else {
  
      console.log("restaurant id the easy way: ", id);
      var restaurantToUpdate = this.restaurant['data'][0];
      console.log("sending to service: restaurantToUpdate: ", restaurantToUpdate)
      let observerable = this._httpService.updateRestaurantById(restaurantToUpdate);
      observerable.subscribe(data => {
        console.log("Status from update Task: ", data['message']);
        if (data['message'] == "Error"){
          console.log("data - look at to find error: ", data);
          console.log("error message: ", data['error']['errors']['name']['message']);
          this.errorMessage = data['error']['errors']['name']['message'];
          this.errorsPresent = true;
          console.log("errorMessage: ",this.errorMessage);
          console.log("errorsPresent: ",this.errorsPresent);
        } else {
          console.log("rerouting on purpose");
          this.errorsPresent = false;
          this.restaurantDataAvailable = false;
          this._router.navigate(['/dashboard']);
        }
      }) 
    } 
    */    
  }
/*
  validateData(name,cuisine){
    console.log("in validateData, name: ", name, "cuisine: ", cuisine);
    if (name.length < 3){
      console.log("restaurant name too short");
      this.error1Present = true;
      this.error1Message = "Restaurant names must contain at least 3 characters"
    }
    if (cuisine.length < 3){
      this.error2Present = true;
      this.error2Message = "Cuisine types must contain least 3 characters"
    }
    return;
  }
*/
}

