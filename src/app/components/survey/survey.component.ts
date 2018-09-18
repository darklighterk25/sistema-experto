import { Component, OnInit } from '@angular/core';
import { MethodologiesService } from '../../services/methodologies.service';
import { CharacteristicsService } from '../../services/characteristics.service';
import { Characteristic } from '../../interfaces/characteristic';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html'
})
export class SurveyComponent implements OnInit {

  methodologies: any[];
  characteristics: Characteristic[];
  maxscore: number;
  minscore: number;

  constructor( private _methodologiesService: MethodologiesService,
               private _characteristicsService: CharacteristicsService ) {
    this.methodologies = this._methodologiesService.getScores();
    this.characteristics = this._characteristicsService.getCharacteristics();
    this.maxscore = 0;
    this.minscore = 0;
  }

  ngOnInit() {
  }

  checkValue ( index: any ) {
    if ( !this.characteristics[index].checked ) {
      for (let i = 0; i < this.characteristics[index].methodologies.length; i++){
        let methodology: number = this.characteristics[index].methodologies[i];
        let point: number = this.characteristics[index].points[i];
        this.methodologies[methodology].score += point;
      }
    } else {
      for (let i = 0; i < this.characteristics[index].methodologies.length; i++){
        let methodology: number = this.characteristics[index].methodologies[i];
        let point: number = this.characteristics[index].points[i];
        this.methodologies[methodology].score -= point;
      }
    }
    this.characteristics[index].checked = !this.characteristics[index].checked;
    this.getMaxMinScore();
  }

  getMaxMinScore(){
    let max = 0;
    let min = 0;
    for (let methodology of this.methodologies){
      if ( max < methodology.score){
        max = methodology.score;
      }
    }
    if ( max-3 < 0){
      min = 0;
    }else{
      min = max-3;
    }
    this.maxscore = max;
    this.minscore = min;
  }

  prueba(){
    console.log('funcion :v')
  }
}
