import { BreakpointState, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderdataService } from 'src/app/modules/api-rest/services/headerdata/headerdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, distinctUntilChanged } from 'rxjs/operators';
import { NavigationService } from 'src/app/modules/api-rest/services/navigation/navigationservice.service';
import { UserService } from 'src/app/modules/api-rest/services/user/user.service';


@Component({
  selector: 'main-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements AfterViewInit {
  title = '';
  url = '';

  constructor(private breakpointObserver: BreakpointObserver, private headerService: HeaderdataService, private router: Router,
    private activeRoute: ActivatedRoute, private navigation: NavigationService, private cd: ChangeDetectorRef,
    private userService: UserService) { } //private location: Location 

  ngOnInit(): void {
    this.url = location.href.substring(21);
  }

  ngAfterViewInit() {
    // actualiza el título de la sección en la que estoy   
    this.headerService.title$.pipe(distinctUntilChanged(), delay(0)).subscribe(res => {
      // Aplica un delay de 0 milisegundos y a través del pipe, me fijo que sólo se emita cuando sea distinto el valor -> cuando cambie el t
      this.title = res;
      this.url = location.href.substring(21);
    });
  }

  // maneja los breakpoints desde ts
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  goBack(): void {
    this.navigation.back();
  }

  logout(){
    this.userService.deleteStorage();
  }

}

