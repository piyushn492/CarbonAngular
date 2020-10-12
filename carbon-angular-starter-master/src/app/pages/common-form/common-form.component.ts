import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../data-store.service';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.scss']
})
export class CommonFormComponent implements OnInit {
  breakfast;
  lunch;
  dinner;

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
  }

  onSave() {
    this.dataStoreService.breakfastData.subscribe(data => {
      this.breakfast = data
    })
    this.dataStoreService.lunchData.subscribe(data => {
      this.lunch = data
    })
    this.dataStoreService.dinnerData.subscribe(data => {
      this.dinner = data
    })
    const savePayload = {
      breakfast: this.breakfast,
      lunch: this.lunch,
      dinner: this.dinner
    }
    console.log(savePayload)
    this.dataStoreService.saveData(savePayload).subscribe(d => {
      console.log('saved')
    })
  }

}
