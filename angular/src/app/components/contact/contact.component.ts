import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { QueryService } from '../../services/query.service';
import { QueryForm } from 'src/app/models/query';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [QueryService]
})

export class ContactComponent implements OnInit {


  contactForm: FormGroup;

  constructor(
    public queryService: QueryService,
    private fb: FormBuilder,

  ) {

  }


  ngOnInit(): void {

    this.contactForm = this.fb.group({
      name: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(3), Validators.maxLength(25)
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(3), Validators.maxLength(25)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.email
      ])),
      title: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(50)
      ])),
      message: new FormControl('', Validators.required),
    });

  }

  addQuery(contactForm: FormGroup) {

    if (contactForm.valid) {
      this.queryService.postFormQuery(contactForm.value)
        .subscribe()
      contactForm.reset();
      this.queryService.selectedQuery = new QueryForm();
    }

  }

}