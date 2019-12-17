import {ApplicationRef, ChangeDetectorRef, Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { NgModel} from '@angular/forms';
import {BookComponent} from "./book.component";
import {Book, BookService} from "./book.service";

@Component({
    selector: 'my-app',
    template: `<div>
        <table>
            <tr *ngFor="let item of items,let i = index">
                <td>{{item.name}}</td> <td>{{item.author}}</td><td><button (click)="goToItem(keys[i])">About</button></td> 
            </tr>
        </table>
        
    </div>`
})
export class HomeComponent implements OnInit{
    items:Book[]=[];
    keys:number[]=[];
    constructor(private router:Router,private ob:BookService) {

    }

    ngOnInit(): void {

        let p =this.ob.getBooks();
        for(let key in p){
            this.items.push(p[key]);
            this.keys.push(+key);
        }

    }

    goToItem(ID:number){
        this.router.navigate(
            ['/books',ID]
        );
    }


}
