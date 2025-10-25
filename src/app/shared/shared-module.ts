import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponent],
  exports: [CommonModule, HeaderComponent]
})
export class SharedModule {}
