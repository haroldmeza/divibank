import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  public show = new BehaviorSubject(false);
  public message = new BehaviorSubject('');

  constructor() { }

  public setShowStatus(status: boolean): void{
    this.show.next(status);
  }

  public setMessage(message: string): void{
    this.message.next(message);
  }
}
