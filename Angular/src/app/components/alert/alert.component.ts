import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input()
  type : string = 'danger'
  @Input()
  header : string = ''
  @Input()
  message : any = ''
  @Output()
  onClose = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete() : void{
    this.onClose.emit(true)
  }

  getType(): string{
    return `is-${this.type}`
  }
}
