import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerviewComponent } from './passengerview/passengerview.component';
import { UsdataComponent } from './usdata/usdata.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { QuotesComponent } from './quotes/quotes.component';
import { ShopingComponent } from './shooping/shooping.component';

const myRoutes:Routes=[
  {
  path:"",
  component:PassengerviewComponent
  },
  {
    path:"us",
    component:UsdataComponent
  },
  {
    path:"todo",
    component:TodoComponent
  },
  {
    path:"quotes",
    component:QuotesComponent
  },
  {
    path:"shopping",
    component:ShopingComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    PassengerviewComponent,
    UsdataComponent,
    NavbarComponent,
    TodoComponent,
    QuotesComponent,
    ShopingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
