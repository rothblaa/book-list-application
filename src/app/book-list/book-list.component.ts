import { CommonModule } from '@angular/common';
import { Book } from './../book';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books: Book[] = []

  constructor(private bookService: BookService) {

  }

  ngOnInit(): void { // Lifecycle hook
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks()
    .subscribe(booksFromApi => this.books = booksFromApi);
  }
}
