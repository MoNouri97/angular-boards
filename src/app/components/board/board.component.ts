import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from "@angular/core";
import { Board } from "src/app/models/board.model";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { BoardsService } from "src/app/services/boards.service";
import { trigger, transition, animate, style } from "@angular/animations";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
  animations: [
    trigger("colAnim", [
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
          "200ms ease-out",
          style({
            transform: "scale(0)",
            opacity: 0,
          })
        ),
        // animate space
        animate(
          "100ms ease-out",
          style({
            width: "0%",
            "margin-bottom": 0,
            "margin-left": 0,
            "margin-right": 0,
            // expand the padding
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: 0,
            paddingLeft: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class BoardComponent implements AfterViewChecked {
  @Input() board: Board;
  @ViewChild("scrollDiv") scrollDiv: ElementRef<HTMLElement>;
  @ViewChild("columns") columns: ElementRef<HTMLElement>;

  constructor(private service: BoardsService) {}

  ngAfterViewChecked(): void {
    this.refresh();
  }

  /**
   * Update the Width of the top scrollBar
   */
  refresh() {
    const width = this.columns.nativeElement.scrollWidth;
    this.scrollDiv.nativeElement.style.width = width.toString() + "px";
  }

  /**
   * Synch the scroll between columns & top scrollBar
   * @param originalScroll true when scrolling the real element
   */
  onScroll(originalScroll: boolean) {
    if (!originalScroll) {
      this.columns.nativeElement.scrollLeft = this.scrollDiv.nativeElement.parentElement.scrollLeft;
      return;
    }

    this.scrollDiv.nativeElement.parentElement.scrollLeft = this.columns.nativeElement.scrollLeft;
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log("drop");

    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );

    this.service.updateStorage();
  }

  onAddColumn(): void {
    this.service.addColumn(this.board);
    this.refresh();
  }
}
