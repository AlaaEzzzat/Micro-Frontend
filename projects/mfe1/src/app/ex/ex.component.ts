import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex',
  templateUrl: './ex.component.html',
  styleUrls: ['./ex.component.scss'],
})
export class ExComponent implements OnInit {
  ngOnInit(): void {
    console.log('EX');
  }
}
