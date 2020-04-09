import { Component, OnInit, Input } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { BoardsService } from "src/app/services/boards.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
  animations: [
    trigger("itemAnim", [
      // in animation
      transition("toAdd => added", [
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
        animate(200),
      ]),
    ]),
  ],
})
export class TaskComponent implements OnInit {
  @Input() task: string;
  animState: string;

  constructor(private service: BoardsService) {}

  ngOnInit(): void {
    this.animState = this.service.taskToAdd ? "toAdd" : "added";
  }
  onAnimationDone(e) {
    this.animState = "added";
    this.service.taskToAdd = false;
  }
}
