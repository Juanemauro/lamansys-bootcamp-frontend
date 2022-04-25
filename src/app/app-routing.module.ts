import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpicsComponent } from './modules/presentation/components/epics/epics.component';
import { HomeComponent } from './modules/presentation/components/home/home.component';
import { ProjectsComponent } from './modules/presentation/components/projects/projects.component';
import { StoriesComponent } from './modules/presentation/components/stories/stories.component';
import { ProjectDetailComponent } from './modules/presentation/components/project-detail/project-detail.component';
import { EpicDetailComponent } from './modules/presentation/components/epic-detail/epic-detail.component';
import { StoryFromEpicComponent } from './modules/presentation/components/story-from-epic/story-from-epic.component';
import { LoginComponent } from './modules/presentation/components/login/login.component';
import { AuthguardGuard } from 'src/app/modules/api-rest/services/guards/authguard.guard';
import { ConstructionComponent } from './modules/presentation/components/construction/construction/construction.component';
import { UserGuard } from 'src/app/modules/api-rest/services/guards/user.guard';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [AuthguardGuard],
	},
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [AuthguardGuard],
	},
	{
		path: 'my-projects',
		component: ProjectsComponent,
		canActivate: [AuthguardGuard],
	},
	{
		path: 'my-projects/:idProject',
		component: ProjectDetailComponent,
		canActivate: [AuthguardGuard, UserGuard],
	},
	{
		path: 'epics-test',
		component: EpicsComponent,
		canActivate: [AuthguardGuard],
	},
	{
		path: 'my-projects/:idProject/:idEpic',
		component: EpicDetailComponent,
		canActivate: [AuthguardGuard, UserGuard],
	},
	{
		path: 'my-projects/:idProject/:idEpic/:idStory',
		component: StoryFromEpicComponent,
		canActivate: [AuthguardGuard, UserGuard],
	},
	{
		path: 'my-stories',
		component: StoriesComponent,
		canActivate: [AuthguardGuard],
	},
	{
		path: 'settings',
		component: ConstructionComponent,
		canActivate: [AuthguardGuard],
	},
	{
		path: 'my-profile',
		component: ConstructionComponent,
		canActivate: [AuthguardGuard],
	},
	{
		path: 'login',
		component: LoginComponent
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
