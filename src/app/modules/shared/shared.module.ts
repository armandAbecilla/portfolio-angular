import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

const components = [
  HeaderComponent, FooterComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports: [
    components
  ]
})
export class SharedModule { }
