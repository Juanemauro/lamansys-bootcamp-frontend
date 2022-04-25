import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectdataService } from '../projects/projectdata.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    private projectService: ProjectdataService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let membersList = [];
    let currentUserId = this.userService.getStorage('_iduser');
    let idProject = route.paramMap.get('idProject');
    return new Promise((resolve) => {
      this.projectService.getProjectInfoAPI(Number(idProject)).subscribe(
        dataProject => {
          membersList = dataProject.data[0].members;
          if (membersList.find(user => user == currentUserId)) {
            resolve(true);
          } else {
            this.router.navigate(['/home']);
            resolve(false);
          }
        }
      )
    }
    )
  }
}
