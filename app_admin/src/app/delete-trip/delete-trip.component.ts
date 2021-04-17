import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from
  "@angular/forms";
import { Router } from "@angular/router";
import { TripDataService } from '../../../services/trip-data.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})

export class DeleteTripComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private tripService: TripDataService) { }

  ngOnInit() {
    // retrieve stashed tripId
    let tripCode = localStorage.getItem("tripCode");
    alert("DeleteTripComponent found tripCode " + tripCode);

    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log('DeleteTripComponent#onInit found tripCode ' + tripCode);
    this.tripService.removeTrip(tripCode)
      .then(data => {
        console.log(data);
        this.router.navigate(['']);
      });
  }

  onSubmit() {
    this.submitted = true;
    this.tripService.removeTrip(localStorage.getItem("tripCode"))
      .then(data => {
        console.log(data);
        this.router.navigate(['']);
      });
  }
  // get
}
