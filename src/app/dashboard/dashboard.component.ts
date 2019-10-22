import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  questions: string[] = ['Ques.1 What is patient name?','Ans. Gabriel', 'Ques.2 What is patient age?', 'Ans. 45'];
  questionsTwo: string[] = ['Ques.1 What is patient name?','Ans. Gabriel', 'Ques.2 What is patient age?', 'Ans. 45'];
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstName: new FormControl()
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

}
}
