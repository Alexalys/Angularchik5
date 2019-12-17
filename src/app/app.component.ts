import { Component} from '@angular/core';
import {Router} from '@angular/router';
import { NgModel} from '@angular/forms';
import {BookComponent} from "./book.component";

@Component({
    selector: 'my-app',
    template: `<div>
        <nav>
            <a routerLink="/books">Список книг</a>
            <a routerLink="/books/add">Добавить книгу</a>
        </nav>
        <router-outlet></router-outlet>
    </div>`
})
export class AppComponent {}
