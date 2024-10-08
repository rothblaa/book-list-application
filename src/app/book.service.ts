import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  //not good practice to put this here, but just for simplicity of small app....
  private apiUrl = 'https://localhost:7148';

  constructor(private http : HttpClient) { }

  // returns obs of type book array; gets value asynchronously after subscribing to obs
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
}
