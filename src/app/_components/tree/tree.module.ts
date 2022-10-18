import { NgModule } from '@angular/core';

import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { TreeComponent } from './tree.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TreeComponent,
  ],
  imports: [
    TreeViewModule,
    DialogsModule,
    InputsModule,
    CommonModule
  ],

  exports : [ TreeComponent ]
})

export class TreeModule { }