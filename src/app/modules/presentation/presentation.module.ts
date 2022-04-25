import { MaterialModule } from './../material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectsComponent } from './components/projects/projects.component';
import { EpicsComponent } from './components/epics/epics.component';
import { StoriesComponent } from './components/stories/stories.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { EpicDetailComponent } from './components/epic-detail/epic-detail.component';
import { StoryFromEpicComponent } from './components/story-from-epic/story-from-epic.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteTaskComponent } from './components/delete-task/delete-task.component';
import { RedirectionsComponent } from './components/redirections/redirections.component';
import { MenuDesktopComponent } from './components/menu-desktop/menu-desktop.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { ConstructionComponent } from './components/construction/construction/construction.component';


@NgModule({
	declarations: [
		ProjectsComponent,
		EpicsComponent,
		StoriesComponent,
		TasksComponent,
		ProjectItemComponent,
		HomeComponent,
		ProjectDetailComponent,
		EpicDetailComponent,
		StoryFromEpicComponent,
		NavigationComponent,
		HeaderComponent,
		AddTaskComponent,
		DeleteTaskComponent,
		RedirectionsComponent,
		MenuDesktopComponent,
		LoginComponent,
		FooterComponent,
		ConstructionComponent,

	],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MaterialModule,
		RouterModule,
		ReactiveFormsModule,
	],
	exports: [
		FlexLayoutModule,
		MaterialModule,
		ProjectsComponent,
		EpicsComponent,
		StoriesComponent,
		TasksComponent,
		ProjectItemComponent,
		NavigationComponent,
		RouterModule,
		HeaderComponent,
		AddTaskComponent,
		ReactiveFormsModule,
		LoginComponent,
		ConstructionComponent
	],

})
export class PresentationModule {
}
