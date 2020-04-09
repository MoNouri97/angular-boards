import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import * as Feather from "feather-icons";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"],
})
export class AddTaskComponent implements OnInit {
  task: string;
  @Output() add = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    Feather.replace();
  }
  onSubmit(form: NgForm): void {
    if (!form.valid) return;
    this.add.emit(form.value.task);
    form.reset();
  }
}
