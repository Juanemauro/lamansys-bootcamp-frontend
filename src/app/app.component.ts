import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeaderdataService } from './modules/api-rest/services/headerdata/headerdata.service';

const DEFAULT_LANG = 'es-AR';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = '';

	currentYear = new Date().getFullYear()

	constructor(translate: TranslateService, private headerService: HeaderdataService) {
		translate.setDefaultLang(DEFAULT_LANG)
	}

	ngOnInit(): void {

	}

}
