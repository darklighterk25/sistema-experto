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

  constructor( private _methodologiesService: MethodologiesService,
               private _characteristicsService: CharacteristicsService ) {
    this.methodologies = _methodologiesService.getScores();
    this.characteristics = _characteristicsService.getCharacteristics();
   }

  ngOnInit() { }

  checkValue ( index: any ) {
    if ( !this.characteristics[index].checked ) {
      this.methodologies[index].score += 1;
    } else {
      this.methodologies[index].score -= 1;
    }
    this.characteristics[index].checked = !this.characteristics[index].checked;
  }
}
