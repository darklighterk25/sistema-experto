import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Methodology } from '../../interfaces/methodology';
import { MethodologiesService } from '../../services/methodologies.service';

@Component({
  selector: 'app-methodology',
  templateUrl: './methodology.component.html',
  styles: []
})
export class MethodologyComponent implements OnInit {

  methodology: Methodology;

  constructor( private _activatedRoute: ActivatedRoute,
               private _methodologiesService: MethodologiesService ) {
    this._activatedRoute.params.subscribe( params => {
      this.methodology = this._methodologiesService.getMethodology( params['name'] );
    });
  }
  ngOnInit() {
  }
}
