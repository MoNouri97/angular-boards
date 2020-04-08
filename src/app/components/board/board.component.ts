import { Component, OnInit, Input } from "@angular/core";
import { Board } from "src/app/models/board.model";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { BoardsService } from "src/app/services/boards.service";
import { Column } from "src/app/models/column.model";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent implements OnInit {
  @Input() board: Board;
  constructor(private service: BoardsService) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
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
    console.log(this.board);
    this.service.updateStorage();
  }

  onAddTask(task: string, column: number): void {
    this.service.addTask(task, this.board.id, column);
  }
}
