import { Component, OnInit } from '@angular/core';
import { MethodologiesService } from '../../../services/methodologies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links: any[];

  constructor( private _methodologiesService: MethodologiesService ) {
    this.links = _methodologiesService.getLinks();
    console.log(this.links);
  }

  ngOnInit() {
  }

}
