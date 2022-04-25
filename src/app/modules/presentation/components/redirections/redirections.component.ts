import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderdataService } from 'src/app/modules/api-rest/services/headerdata/headerdata.service';

@Component({
  selector: 'app-redirections',
  templateUrl: './redirections.component.html',
  styleUrls: ['./redirections.component.css']
})
export class RedirectionsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private headerService: HeaderdataService,
  ) { }


  ngOnInit(): void {
  }

  goHome(){    
    this.router.navigate(['home']);
    this.headerService.setTitle('Home');
  }
}
