import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {BookService,Book} from "./book.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'add-book',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: `<form #myForm="ngForm" novalidate>
        <div>
        <h3>Введите данные о книге</h3>
            <p>ID</p>
        <input type="number"  name="id" ngModel required placeholder="ID"/><br />
            <p>Название(с большой буквы)</p>
        <input name = "name" ngModel   required pattern="^[A-Z\wА-Я][a-z\wа-я]*$" placeholder="Name" /><br />
            <p>Автор</p>
        <input name="author" ngModel required pattern="" placeholder="Author" /><br />
            <p>Год издания</p>
        <input type="number" name="year" ngModel  required  placeholder="Year"/><br />
        <button [disabled]="myForm.invalid" (click)="createBook(myForm)" class="btn">Create</button>
    </div>
    </form>`
})
export class AddComponent {

    constructor(private bookService:BookService) {}
    createBook(form:NgForm){
        this.bookService.addBook2(form.value.id,new Book(form.value.name,form.value.author,form.value.year));
    }
}
