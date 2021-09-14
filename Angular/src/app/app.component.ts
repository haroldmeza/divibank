import { Component, OnInit } from '@angular/core';
import { ProgressService } from './services/progress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  showProgress : boolean = false;
  messageProgress : string = '';

  constructor(private progressService:ProgressService){

  }

  ngOnInit(): void {
    this.progressService.show.subscribe(v => this.showProgress = v);
    this.progressService.message.subscribe(v => this.messageProgress = v);
  }

  close(): void{
    this.progressService.setShowStatus(false)
  }
}
