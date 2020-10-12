import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataStoreService } from '../../data-store.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})
export class LunchComponent implements OnInit {
  public formGroup: FormGroup;
  manyRadios = [
		{ num: "Vegeterian" },
		{ num: "Non-Vegeterian" }
	];
  size = 1
  currentData = {Option: '', Name: '', Quantity: ''}

  constructor(protected formBuilder: FormBuilder, private dataStoreService: DataStoreService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      radioGroup: new FormControl(),
      selecterino: new FormControl()
    });
  }

  onChangeRadio(event) {
    this.currentData = {...this.currentData, ...{Option: event.value}}
    this.dataStoreService.lunchData.next(this.currentData)
  }

  onChangeSelect(event) {
    this.currentData = {...this.currentData, ...{Quantity: event.target.value}}
    this.dataStoreService.lunchData.next(this.currentData)
  }

  onChangeInput(event) {
    this.currentData = {...this.currentData, ...{Name: event.target.value}}
    this.dataStoreService.lunchData.next(this.currentData)
  }
}
