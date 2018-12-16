import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import {
  // MatToolbarModule,
  // MatButtonModule,
  // MatCardModule,
  // MatDialogModule,
  // MatInputModule,
  // MatTableModule,
  // MatIconModule,
  // MatMenuModule,
  // MatDividerModule,
  // MatCheckboxModule
// } from '@angular/material';

import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatCardModule,
    // MatDialogModule,
    // MatInputModule,
    // MatTableModule,
    // MatIconModule,
    // MatMenuModule,
    // MatDividerModule,
    // MatCheckboxModule
    Material.MatToolbarModule,
    Material.MatButtonModule,
    Material.MatCardModule,
    Material.MatDialogModule,
    Material.MatInputModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatMenuModule,
    Material.MatDividerModule,
    Material.MatCheckboxModule,
    ////////////// Tutorial
    // Material.MatGridListModule,
    // Material.MatRadioModule,
    // Material.MatSelectModule,
    // Material.MatDatepickerModule,
    // Material.MatNativeDateModule,
    // Material.MatCheckboxModule,
    // Material.MatFormFieldModule // ?????
  ],
  exports: [
    // MatToolbarModule,
    // MatButtonModule,
    // MatCardModule,
    // MatDialogModule,
    // MatInputModule,
    // MatTableModule,
    // MatIconModule,
    // MatMenuModule,
    // MatDividerModule,
    // MatCheckboxModule
    Material.MatToolbarModule,
    Material.MatButtonModule,
    Material.MatCardModule,
    Material.MatDialogModule,
    Material.MatInputModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatMenuModule,
    Material.MatDividerModule,
    Material.MatCheckboxModule,
    ////////////// Tutorial
    // Material.MatGridListModule,
    // Material.MatRadioModule,
    // Material.MatSelectModule,
    // Material.MatDatepickerModule,
    // Material.MatNativeDateModule, // MatDatepicker: No provider found for DateAdapter. You must import one of the following modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a custom implementation.
    // Material.MatCheckboxModule,
    // Material.MatFormFieldModule // ????
  ]
})
export class AngularMaterialModule { }
