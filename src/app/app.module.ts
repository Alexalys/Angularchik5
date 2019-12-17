import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import {Routes,RouterModule} from "@angular/router";
import {AddComponent} from "./add.component";
import {BookComponent} from "./book.component";
import {BookService} from "./book.service";
import {HomeComponent} from "./home.component";
/*
const itemRoutes: Routes = [
    { path: 'add', component: AddComponent},
];
 */
const appRoutes: Routes =[
    { path: 'books', component: HomeComponent},
    { path: 'books/add', component: AddComponent},
    { path: 'books/:id', component: BookComponent},
    { path: '**', redirectTo: '/books' }
];
@NgModule({
    imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent,BookComponent,AddComponent,HomeComponent ],
    providers: [BookService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
