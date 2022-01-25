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
    setTimeout(() => {
      this.isActive = true;
    }, 45000);
  }
  retry() {
    this.DismissWarning.emit();
  }
}
