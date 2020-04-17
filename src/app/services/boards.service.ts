import { Injectable } from "@angular/core";
import { Board } from "../models/board.model";
import { Column } from "../models/column.model";

@Injectable({
  providedIn: "root",
})
export class BoardsService {
  boards: Board[];
  private _taskToAdd: boolean = false;
  public get taskToAdd(): boolean {
    return this._taskToAdd;
  }
  public set taskToAdd(value: boolean) {
    this._taskToAdd = value;
  }

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
  }

  getAll(): Board[] {
    return this.boards;
  }

  getBoard(id: number): Board {
    const board: Board = this.boards.filter((b) => b.id == id)[0];
    return board;
  }

  addTask(task: string, boardId: number, column: number) {
    const b = this.getBoard(boardId).columns[column].tasks.splice(0, 0, task);
    this.taskToAdd = true;
    this.updateStorage();
  }
  addColumn(board: Board, title: string = "tasks") {
    board.columns.push(new Column(title, []));
    this.updateStorage();
  }
  renameColumn(board: number, column: number, title: string): void {
    this.getBoard(board).columns[column].title = title;
    this.updateStorage();
  }
  deleteColumn(boardId: number, columnIndex: number) {
    this.getBoard(boardId).columns.splice(columnIndex, 1);
    this.updateStorage();
  }
}
