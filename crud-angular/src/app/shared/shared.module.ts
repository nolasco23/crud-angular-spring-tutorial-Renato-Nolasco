import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { ErroDialogComponent } from './components/erro-dialog/erro-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';


@NgModule({
  declarations: [
    CategoryPipe,
    ErroDialogComponent,
    DialogConfirmComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports:[
    CategoryPipe,
    ErroDialogComponent,
    DialogConfirmComponent
  ],
  entryComponents:[
  ]
})
export class SharedModule { }
