import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  Output,
  EventEmitter,
} from "@angular/core";
import { Board } from "src/app/models/board.model";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { BoardsService } from "src/app/services/boards.service";
import {
  animate,
  style,
  trigger,
  transition,
  query,
  stagger,
} from "@angular/animations";
import { Column } from "src/app/models/column.model";
@Component({
  selector: "app-column",
  templateUrl: "./column.component.html",
  styleUrls: ["./column.component.scss"],
  animations: [
    trigger("itemAnim", [
      // in animation
      transition("void => *", [
        // initial
        style({
          height: 0,
          opacity: 0,
          transform: "scale(0.85)",
          "margin-bottom": 0,
          // expand the padding
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),
        animate(
          "50ms",
          style({
            height: "*",
            "margin-bottom": "*",
            paddingTop: "*",
            paddingBottom: "*",
            paddingRight: "*",
            paddingLeft: "*",
          })
        ),
        animate(68),
      ]),
      transition("* => void", [
        // scale up
        animate(
          50,
          style({
            transform: "scale(1.05)",
          })
        ),
        // scale down
        animate(
          50,
          style({
            transform: "scale(1)",
            opacity: 0.75,
          })
        ),
        animate(
          "120ms ease-out",
          style({
            transform: "scale(0.68)",
            opacity: 0,
          })
        ),
        // animate space
        animate(
          "150ms ease-out",
          style({
            height: 0,
            "margin-bottom": 0,
            // expand the padding
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: 0,
            paddingLeft: 0,
          })
        ),
      ]),
    ]),
    trigger("listAnim", [
      transition("*=>*", [
        query(
          ":enter",
          [
            style({
              opacity: 0,
              height: 0,
            }),
            stagger(100, [animate(".2s ease")]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ColumnComponent {
  @Input() column: Column;
  @Input() columnIndex: number;
  @Input() boardId: number;
  @Input() tasks: string[];
  editing: boolean = false;

  @Output() delete = new EventEmitter();

  constructor(private service: BoardsService) {}

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
    this.service.updateStorage();
  }
  onAddTask(task: string): void {
    this.service.addTask(task, this.boardId, this.columnIndex);
  }
  onEditColTitle(title: string): void {
    this.service.renameColumn(this.boardId, this.columnIndex, title);
    this.toggleEditing();
  }
  onDeleteColumn(): void {
    this.service.deleteColumn(this.boardId, this.columnIndex);
    this.delete.emit();
  }
  toggleEditing() {
    this.editing = !this.editing;
  }
}
