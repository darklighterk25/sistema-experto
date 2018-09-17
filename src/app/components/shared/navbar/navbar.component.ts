import { Component, OnInit } from '@angular/core';
import { MethodologiesService } from '../../../services/methodologies.service';
import {Link} from '../../../interfaces/link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  links: any;

  constructor( private _methodologiesService: MethodologiesService ) {
    this.links = _methodologiesService.getLinks();
  }

  ngOnInit() {
  }

}
