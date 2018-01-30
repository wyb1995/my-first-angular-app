import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempalte-from',
  templateUrl: './tempalte-from.component.html',
  styleUrls: ['./tempalte-from.component.css']
})
export class TempalteFromComponent implements OnInit {

  name: string;
  gender: string;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.name = 'bob';
  }

  onSubmit() {

  }

}
