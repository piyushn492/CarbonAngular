import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// carbon-components-angular default imports
import { CheckboxModule, InputModule, PaginationModule, RadioModule, SelectModule, Table, TableHeaderItem, TableItem, TableModel, TableModule, UIShellModule } from 'carbon-components-angular';
import { TabsModule } from 'carbon-components-angular'
import { Notification20Module } from '@carbon/icons-angular/lib/notification/20';
import { UserAvatar20Module } from '@carbon/icons-angular/lib/user--avatar/20';
import { AppSwitcher20Module } from '@carbon/icons-angular/lib/app-switcher/20';
import { HeaderComponent } from './header/header.component';
import { CommonFormComponent } from './pages/common-form/common-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreakfastComponent } from './pages/breakfast/breakfast.component';
import { LunchComponent } from './pages/lunch/lunch.component';
import { DinnerComponent } from './pages/dinner/dinner.component';
import { TableComponent } from './pages/table/table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		CommonFormComponent,
		DashboardComponent,
		BreakfastComponent,
		LunchComponent,
		DinnerComponent,
		TableComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		UIShellModule,
		TabsModule,
		CheckboxModule,
		RadioModule,
		InputModule,
		SelectModule,
		TableModule,
		PaginationModule,
		Notification20Module,
		UserAvatar20Module,
		AppSwitcher20Module,
		HttpClientModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
