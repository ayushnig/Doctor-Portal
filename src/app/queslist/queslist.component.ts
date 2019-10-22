import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2'

export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'queslist',
  templateUrl: './queslist.component.html',
  styleUrls: ['./queslist.component.scss']
})
export class QueslistComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  todos = [
    'Template for surgery A',
    'Template for surgery B',
  ];

  questions = [
    'Q.1 What is the Name?',
    'Q.2 What is the age?',
    'Q.3 What is the Gender',
  ];
  public show:boolean = true;
  public buttonName:any = 'true';


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  async addUser() {
    const {value: username} = await Swal.fire({
      title: 'Add user',
      html:
      '<label>Enter Username</label><input id="swal-input1" class="swal2-input">' +
      '<label>Enter Type</label><input id="swal-input2" class="swal2-input">',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!'
        }
      }
    })
    if (username) {
      Swal.fire('Entered username: ' + username)
    }
  }
 async createTemplate () {
  const {value: text} = await Swal.fire({
    title: 'Input name',
    input: 'text',
    inputPlaceholder: 'Add Question',
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return 'You need to write something!'
      }
    }
  })
  
  if (text) {
    Swal.fire('Entered text: ' + text)
  }
 }

 drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
}

  openQuestion() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}
