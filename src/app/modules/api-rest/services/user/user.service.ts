import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/modules/core/services/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private localStorageService: LocalStorageService) { }

  setStorage(id: string, value: string): void {
    localStorage.setItem(id, value);
  }

  getStorage(id: string): string | null {
    return localStorage.getItem(id);
  }
  
  deleteStorage(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
