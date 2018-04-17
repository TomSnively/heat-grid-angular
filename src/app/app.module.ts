import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { GridComponent } from './components/grid/grid.component';
import { RowComponent } from './components/row/row.component';
import { CellComponent } from './components/cell/cell.component';
import { TotalheatComponent } from './components/totalheat/totalheat.component';

import { InitializeGridDataService } from './services/initialize-grid-data.service';
import { GetBackgroundColorService } from './services/get-background-color.service';
import { GetForegroundColorService } from './services/get-foreground-color.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputsComponent,
    GridComponent,
    RowComponent,
    CellComponent,
    TotalheatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    InitializeGridDataService,
    GetBackgroundColorService,
    GetForegroundColorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
