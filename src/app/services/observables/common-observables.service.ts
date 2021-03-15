import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonObservableService {
  //behavior subjects are items you can call next on to set values to it; next and getValue => look up later
  private _pageTitle = new Subject<string>(); 
  pageTitle: Observable<string> = this._pageTitle.asObservable();

  constructor() { }

  updateTitle(title: string){
    this._pageTitle.next(title);
  }
}
