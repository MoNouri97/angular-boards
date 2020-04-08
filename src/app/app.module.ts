import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainViewComponent } from "./pages/main-view/main-view.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BoardComponent } from "./components/board/board.component";
import { TaskComponent } from "./components/task/task.component";

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    BoardComponent,
    TaskComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
