import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookListComponent {
  books: Book[] = [];
  title = '';
  author = '';
  isbn = '';
  alertMessage = '';
  alertType = '';

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }

  onSubmit(): void {
    if (!this.title || !this.author || !this.isbn) {
      this.showAlert('Complete todos os campos', 'danger');
      return;
    }

    const newBook: Book = {
      title: this.title,
      author: this.author,
      isbn: this.isbn,
    };

    this.bookService.addBook(newBook);
    this.books.push(newBook);
    this.showAlert('Livro cadastrado com sucesso!', 'success');
    this.clearFields();
  }

  deleteBook(isbn: string): void {
    this.bookService.removeBook(isbn);
    this.books = this.books.filter((book) => book.isbn !== isbn);
    this.showAlert('Livro deletado com sucesso!', 'success');
  }

  showAlert(message: string, type: string): void {
    this.alertMessage = message;
    this.alertType = type;

    setTimeout(() => {
      this.alertMessage = '';
    }, 3000);
  }

  clearFields(): void {
    this.title = '';
    this.author = '';
    this.isbn = '';
  }
}
