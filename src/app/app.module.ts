import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainViewComponent } from "./pages/main-view/main-view.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BoardComponent } from "./components/board/board.component";
import { TaskComponent } from "./components/task/task.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { SimpleFormComponent } from './components/simple-form/simple-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    BoardComponent,
    TaskComponent,
    AddTaskComponent,
    SimpleFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
