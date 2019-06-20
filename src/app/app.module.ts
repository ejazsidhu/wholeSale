import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import 'hammerjs';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatSelectModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatDatepickerModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ShopListComponent } from './shop-list/shop-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatDatepickerModule,MatButtonModule, MatCardModule, MatIconModule, MatTableModule, MatSelectModule, MatNativeDateModule, MatFormFieldModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
