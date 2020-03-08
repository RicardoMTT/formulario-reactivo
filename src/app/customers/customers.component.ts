import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  todoForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required]
    })
  }

  guardarInfo(){
    console.log(this.todoForm);
    
  }

}
