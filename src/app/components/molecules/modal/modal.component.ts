import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() DismissWarning = new EventEmitter<string>();
  isActive = false;
  constructor() { }
  ngOnInit(): void {
    //setting a timeout to display dismiss button. we make it long, for extra annoyance. 
    // possible improvement: check how long since last request, and adjust timeout to that
    setTimeout(() => {
      this.isActive = true;
    }, 45000);
  }
  retry() {
    this.DismissWarning.emit();
  }
}
