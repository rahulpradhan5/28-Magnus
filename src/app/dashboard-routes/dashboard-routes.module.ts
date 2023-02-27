import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedTemplateComponent } from './fixed-template/fixed-template.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {path: 'vaibhav', component: FixedTemplateComponent},
];

@NgModule({
  declarations: [
    FixedTemplateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardRoutesModule { }
