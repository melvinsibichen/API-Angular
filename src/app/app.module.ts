import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerviewComponent } from './passengerview/passengerview.component';
import { UsdataComponent } from './usdata/usdata.component';

const myRoutes:Routes=[
  {
  path:"",
  component:PassengerviewComponent
  },
  {
    path:"us",
    component:UsdataComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PassengerviewComponent,
    UsdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
