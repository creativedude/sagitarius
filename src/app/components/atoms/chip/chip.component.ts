import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {
  @Input() label: string = '';
  @Input() number: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
