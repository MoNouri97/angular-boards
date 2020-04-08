import { Column } from "./column.model";

export class Board {
  private static nextId: number;
  public id: number;
  constructor(public name: string, public columns: Column[]) {
    if (!Board.nextId) {
      Board.nextId = 0;
    }
    this.id = Board.nextId++;
  }
}
