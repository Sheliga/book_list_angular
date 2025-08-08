import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private storageKey = 'books';

  getBooks(): Book[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addBook(book: Book): void {
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem(this.storageKey, JSON.stringify(books));
  }

  removeBook(isbn: string): void {
    const books = this.getBooks().filter((book) => book.isbn !== isbn);
    localStorage.setItem(this.storageKey, JSON.stringify(books));
  }
}
