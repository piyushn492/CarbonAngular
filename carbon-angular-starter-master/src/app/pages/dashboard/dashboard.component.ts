import { Component, OnInit } from '@angular/core';
import { TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';
import { DataStoreService } from '../../data-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public simpleModel = new TableModel();

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
    this.dataStoreService.getData().subscribe((d: any[]) => {
      console.log(d)
      if (this.simpleModel.data[0].length === 0) {
        this.simpleModel.data.splice(0, 1)
      }
      d.forEach(rowdata => {
        const breakfast = rowdata.breakfast.Cuisine + " Cuisine, Name = " + rowdata.breakfast.Name + " (" + rowdata.breakfast.Quantity + ")"
        const lunch = rowdata.lunch.Option + ", Name = " + rowdata.lunch.Name + " (" + rowdata.lunch.Quantity + ")"
        let dinner = ""
        rowdata.dinner.forEach(topping => {
          dinner = dinner + topping + ", "
        })
        dinner = dinner.substring(0, dinner.length - 2)
        this.simpleModel.data.push([new TableItem({data: "Breakfast"}), new TableItem({data: breakfast})])
        this.simpleModel.data.push([new TableItem({data: "Lunch"}), new TableItem({data: lunch})])
        this.simpleModel.data.push([new TableItem({data: "Dinner"}), new TableItem({data: dinner})])
      })
    })
    this.simpleModel.header = [
      new TableHeaderItem({data: "Type"}), new TableHeaderItem({data: "Details" })
    ];
  }
}

