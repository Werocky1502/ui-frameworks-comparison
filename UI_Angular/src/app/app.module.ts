import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { AddRecordPageComponent } from "./pages/add-record-page/add-record-page.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AreaComponent } from "./components/area/area.component";
import { NavigationMenuComponent } from "./components/navigation-menu/navigation-menu.component";
import { ButtonComponent } from "./components/button/button.component";
import { FinanceRecordComponent } from './components/finance-record/finance-record.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddRecordPageComponent,
    HeaderComponent,
    FooterComponent,
    AreaComponent,
    NavigationMenuComponent,
    ButtonComponent,
    FinanceRecordComponent,
    TextInputComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
