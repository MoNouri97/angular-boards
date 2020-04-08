import { Injectable } from "@angular/core";
import { Board } from "../models/board.model";
import { Column } from "../models/column.model";

@Injectable({
  providedIn: "root",
})
export class BoardsService {
  boards: Board[];

  constructor() {
    this.boards = JSON.parse(localStorage.getItem("boards"));
    if (!this.boards) {
      this.boards = [];
      this.boards[0] = new Board("Example Board", [
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
    }
  }

  /**
   * Update Local Storage
   */
  updateStorage(): void {
    localStorage.setItem("boards", JSON.stringify(this.boards));
    console.log(this.boards);
  }

  getAll(): Board[] {
    return this.boards;
  }

  getBoard(id: number): Board {
    const board: Board = this.boards.filter((b) => b.id == id)[0];
    return board;
  }
}
