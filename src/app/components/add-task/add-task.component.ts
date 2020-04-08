import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"],
})
export class AddTaskComponent implements OnInit {
  task: string;
  @Output() add = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm): void {
    console.log(form.value);
    this.add.emit(form.value.task);
  }
}
