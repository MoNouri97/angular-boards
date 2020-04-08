import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"],
})
export class AddTaskComponent implements OnInit {
  task: string;

  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm): void {
    console.log(form.value);
  }
}
