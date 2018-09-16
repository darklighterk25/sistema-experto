import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor( private _router: Router ) {
  }
  ngOnInit() {
  }
  showMethodology( id: string ) {
    this._router.navigate( ['/methodology', id] );
  }
}
