import { CommonModule } from '@angular/common';
import { Book } from './../book';
import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books: Book[] = [
    {id: 1, title: "Book One", author: "Author One"},
    {id: 2, title: "Book Two", author: "Author Two"},
    {id: 3, title: "Book Three", author: "Author Three"}
  ]
}
