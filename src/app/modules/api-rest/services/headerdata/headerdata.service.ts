import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderdataService {
  title$ = new Subject<string>();

  setTitle(title: string) {
    this.title$.next(title);
  }

  constructor() { }
}
