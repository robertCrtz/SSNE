import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

 constructor(private formBuilder: FormBuilder) { 
   this.buildForm();
  }

  
  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      text: ['', [Validators.maxLength(100), Validators.required]],
      category: ['', [Validators.required]]
    });
  }

  onSubmit(){
    this.submitted = true;

    if(this.form.invalid) {
      return;
    }
  }

  get f(){
    return this.form.controls;
  }

}
