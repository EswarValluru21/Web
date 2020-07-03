import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book = {};
  bookEditForm: FormGroup;
  isbn: string = '';
  title: string = '';
  author: string = '';
  description: string = '';
  publisher: string = '';
  published_year: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.bookEditForm = this.formBuilder.group({
      'isbn': [null, Validators.required],
      'title': [null, Validators.required],
      'author': [null, Validators.required],
      'description': [null, Validators.required],
      'publisher': [null, Validators.required],
      'published_year': [null, Validators.required]
    });
    this.getBookDetails(this.route.snapshot.params['id']);

  }
  getBookDetails(id) {
    this.api.getBook(id)
      .subscribe(data => {
        console.log('getting data before editing', data);
        this.book = data;
        this.bookEditForm.setValue({
          isbn: data.isbn,
          title: data.title,
          author: data.author,
          description: data.description,
          publisher: data.publisher,
          published_year: data.published_year
        });
      });
  }
  onFormSubmit(form: NgForm) {
    let id = this.route.snapshot.params['id'];
    console.log('edit form values:', form);
    this.api.updateBook(id, form)
      .subscribe(res => {
        console.log('response in updatebook', res);
        this.router.navigate(['/book-details', id]);
      }, (err) => {
        console.log(err);
      });
  }
}
