import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Board } from "src/app/models/board.model";
import { Column } from "src/app/models/column.model";
import { BoardsService } from "src/app/services/boards.service";

@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"],
})
export class MainViewComponent implements OnInit {
  board: Board;

  constructor(private service: BoardsService) {}
  ngOnInit(): void {
    this.board = this.service.getBoard(0);
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log("helllo");

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
