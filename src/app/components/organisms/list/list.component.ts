import { Component, OnInit, Input } from '@angular/core';
import { Repo } from 'src/app/app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() repos : Repo[] = [];
  constructor() { }

  ngOnInit(): void {
  }
}
