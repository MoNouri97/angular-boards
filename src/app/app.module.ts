import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainViewComponent } from "./pages/main-view/main-view.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BoardComponent } from "./components/board/board.component";
import { TaskComponent } from "./components/task/task.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    BoardComponent,
    TaskComponent,
    AddTaskComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DragDropModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
