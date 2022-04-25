import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatSnackBarModule,
		MatCardModule,
		MatSliderModule,
		MatListModule,
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		MatRadioModule,
		MatDialogModule,
		BrowserAnimationsModule,
		BrowserModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		MatCheckboxModule,
		MatMenuModule,
		MatGridListModule,
	],
	exports: [
		MatSnackBarModule,
		MatToolbarModule,
		MatCardModule,
		MatSliderModule,
		MatListModule,
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		MatRadioModule,
		MatDialogModule,
		BrowserAnimationsModule,
		BrowserModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		MatCheckboxModule,
		MatMenuModule,
		MatGridListModule,
	]
})
export class MaterialModule {
}
