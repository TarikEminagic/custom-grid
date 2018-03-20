import { Component, HostBinding, OnInit } from '@angular/core';
import { GridsterConfig, PushDirections } from 'angular-gridster2';
import { SticosGridItem } from './sticos-grid-item';
import { ANIMATION_TYPES } from 'ngx-loading';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<SticosGridItem>;
  loadingOptions: any;
  
  ngOnInit(): void {
    this.options = {
      gridType: "verticalFixed",
      maxCols: 6,
      minCols: 6,
      minRows: 5,      
      maxRows: 100,
      margin: 10,
      fixedRowHeight: 200,
      pushDirections: {
        north: true,
        east: true,
        south: true,
        west: true,
      },
      enableEmptyCellDrag: true,
      emptyCellDragCallback: this.addWidget.bind(this),
      draggable: {
        enabled: true,
        delayStart: 0
      },
      resizable: {
        enabled: true,
        delayStart: 0
      },
      swap: false,
      pushItems: true
    };

    this.dashboard = [];
    this.loadingOptions = {
      animationType: ANIMATION_TYPES.circleSwish
    }
  }

  addWidget(event, item: SticosGridItem) {
    item.loading = true;
    this.dashboard.push(item);
    setTimeout(() => { item.loading = false}, 2000)
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.findIndex(i => i == item), 1);
  }
}
