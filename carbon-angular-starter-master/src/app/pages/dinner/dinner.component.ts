import { Component, OnInit } from '@angular/core';
import { TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';
import { DataStoreService } from '../../data-store.service';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss']
})
export class DinnerComponent implements OnInit {
  public simpleModel = new TableModel();
  tomatoChecked
  paneerChecked
  chickenChecked

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
  }

  onChangeTomato(event) {
    if (event.checked) {
      this.addRows('Tomato', true)
    } else {
      this.addRows('Tomato', false)
    }
  }
  onChangePaneer(event) {
    if (event.checked) {
      this.addRows('Paneer', true)
    } else {
      this.addRows('Paneer', false)
    }
  }
  onChangeChicken(event) {
    if (event.checked) {
      this.addRows('Chicken', true)
    } else {
      this.addRows('Chicken', false)
    }
  }

  addRows(topping, action) {
    if (this.simpleModel.data[0].length === 0) {
      this.simpleModel.data.splice(0, 1)
    }
    if (action) {
      this.simpleModel.data.push([new TableItem({data: topping})])
    } else {
      const index = this.simpleModel.data.findIndex(d => d[0].data === topping)
      this.simpleModel.data.splice(index, 1)
    }
    const toppingList = this.simpleModel.data.map(d => d[0].data)
    this.simpleModel.header = [
      new TableHeaderItem({data: "Dish Name"})
    ];
    this.dataStoreService.dinnerData.next(toppingList)
  }
}
