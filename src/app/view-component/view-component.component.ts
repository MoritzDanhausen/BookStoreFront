import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookstoreService } from '../bookstore.service';
import {Book} from '../book'

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
  

  constructor(public _service:BookstoreService) { } 

  ngOnInit(): void {
      this.getbooks();
  }

  getbooks(){
    this._service.getBooksFromServer.subscribe(
      data => this.books = data,
    )
  }



}