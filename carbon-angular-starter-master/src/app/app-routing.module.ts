import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonFormComponent } from './pages/common-form/common-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./starter-home/starter-home.module').then(m => m.StarterHomeModule)
	},
	{
		path: 'common-form',
		component: CommonFormComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
