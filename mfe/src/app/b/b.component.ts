import { Component, OnInit } from '@angular/core';
import { data } from '../../another-bootstrap';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    data.subscribe((val) => console.log('New value - ', val));
  }

}
