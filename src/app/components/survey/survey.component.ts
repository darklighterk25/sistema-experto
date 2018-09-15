import { Component, OnInit } from '@angular/core';
import { MethodologiesService } from '../../services/methodologies.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html'
})
export class SurveyComponent implements OnInit {

  scores: any[];
  isChecked: any = false;
  checkValue(event: any){
    this.isChecked = !this.isChecked;
    console.log(event);
  }
  selected(){
    console.log("seleccionado");
  }

  unselected(){
    console.log("desseleccionado");
  }
  constructor( private _methodologiesService: MethodologiesService ) {
    // Recibe todos los nombres de las metodologias registradas con un valor de puntaje.
    this.scores = _methodologiesService.getScores();
    console.log(this.scores);
  }

  ngOnInit() {
  }

  question1( option: number ) {
    switch ( option ) {
      case 0: {
        break;
      }
      case 1: {
        break;
      }
      case 2: {
        break;
      }
    }
  }
}
