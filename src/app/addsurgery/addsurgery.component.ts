import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-addsurgery',
  templateUrl: './addsurgery.component.html',
  styleUrls: ['./addsurgery.component.scss']
})

export class AddsurgeryComponent implements OnInit {
  questions: string[] = ['Ques.1 What is patient name?','Ans. Gabriel', 'Ques.2 What is patient age?', 'Ans. 45'];
  questionsTwo: string[] = ['Ques.1 What is patient name?','Ans. Gabriel', 'Ques.2 What is patient age?', 'Ans. 45'];
  constructor() { }

  ngOnInit() {
  }

}
