import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule, MatMenuModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DirectiveModule} from '../directive/directive.module';
import { ImageListSelectComponent } from './image-list-select/image-list-select.component';



@NgModule({
  declarations: [ConfirmDialogComponent, ImageListSelectComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule,
    ImageListSelectComponent
  ],
  entryComponents: [ConfirmDialogComponent]
})
export class ShardModule { }
