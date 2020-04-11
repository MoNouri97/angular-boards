import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import * as Feather from "feather-icons";
import { ok } from "assert";

@Component({
  selector: "app-simple-form",
  templateUrl: "./simple-form.component.html",
  styleUrls: ["./simple-form.component.scss"],
})
export class SimpleFormComponent implements OnInit, AfterViewChecked {
  mainInput: string;

  @Input() btnText: string;
  @Input() btnIcon: string;
  @Input() placeholder: string = ". . .";
  @Input() initialVal: string = "";

  @ViewChild("icon") icon: ElementRef<HTMLElement>;
  @ViewChild("input") input: ElementRef<HTMLElement>;

  @Output() submit = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.btnText = this.btnText ? this.btnText : "ok";
    this.btnIcon = this.btnIcon ? this.btnIcon : "check";
    this.mainInput = this.initialVal;
  }

  ngAfterViewChecked(): void {
    this.icon.nativeElement.setAttribute("data-feather", this.btnIcon);
    Feather.replace();
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) return;
    this.submit.emit(form.value.mainInput);
    form.reset();
  }
}
