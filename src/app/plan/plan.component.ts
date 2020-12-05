import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  planForm: FormGroup;
  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
