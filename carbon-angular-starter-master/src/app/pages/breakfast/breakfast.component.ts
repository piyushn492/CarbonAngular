import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataStoreService } from '../../data-store.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.scss']
})
export class BreakfastComponent implements OnInit {
  public formGroup: FormGroup;
  manyRadios = [
		{ num: "North Indian" },
		{ num: "South Indian" }
	];
  size = 1;
  currentData = {Cuisine: '', Name: '', Quantity: ''}

  constructor(protected formBuilder: FormBuilder, private dataStoreService: DataStoreService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      radioGroup: new FormControl(),
      selecterino: new FormControl()
    });
  }

  onChangeRadio(event) {
    this.currentData = {...this.currentData, ...{Cuisine: event.value}}
    this.dataStoreService.breakfastData.next(this.currentData)
  }

  onChangeSelect(event) {
    this.currentData = {...this.currentData, ...{Quantity: event.target.value}}
    this.dataStoreService.breakfastData.next(this.currentData)
  }

  onChangeInput(event) {
    this.currentData = {...this.currentData, ...{Name: event.target.value}}
    this.dataStoreService.breakfastData.next(this.currentData)
  }
}
