import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Board } from "src/app/models/board.model";
import { Column } from "src/app/models/column.model";

@Component({
  selector: "app-main-view",
  templateUrl: "./main-view.component.html",
  styleUrls: ["./main-view.component.scss"],
})
export class MainViewComponent implements OnInit {
  board: Board = new Board("Example Board", [
    new Column("To Do", [
      "Creating Service",
      "Optimizing",
      "Ability To add tasks would be nice 😅 ",
      "multiple boards",
      "deleting",
      "storage",
      "Adding Final Touches",
    ]),
    new Column("Doing", [
      "Add dynamic data",
      "Creating Models",
      "Looping through Data",
    ]),
    new Column("Done", ["Styling", "Animating", "Use CDK/DragDrop"]),
  ]);

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
  }
}
