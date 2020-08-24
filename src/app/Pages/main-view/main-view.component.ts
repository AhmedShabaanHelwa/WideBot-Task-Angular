import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  flows1 = [
    'flow 1',
    'flow 2',
    'flow 3',
    'flow 4'
  ];
  flows2 = [
    'flow 1',
    'flow 2',
    'flow 3',
    'flow 4'
  ];
  flows3 = [
    'flow 1',
    'flow 2',
    'flow 3',
    'flow 4'
  ];
  flows4 = [
    'flow 1',
    'flow 2',
    'flow 3',
    'flow 4'
  ];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
