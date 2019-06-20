import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedHttpService } from './shared-http.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[SharedHttpService]
})
export class SharedModule { }
