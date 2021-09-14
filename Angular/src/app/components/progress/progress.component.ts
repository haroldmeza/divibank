import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  @Input()
  message : string = '';
  @Input()
  showCloseButton : boolean = true
  @Output()
  onClose = new EventEmitter<boolean>()
  
  faSpinner = faSpinner

  constructor() { }

  ngOnInit(): void {
  }

  onCloseEvent(): void{
    this.onClose.emit(true);
  }
}
