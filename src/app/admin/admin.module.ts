import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AddpackageComponent } from './addpackage/addpackage.component';
import { OffersComponent } from './offers/offers.component'
import { MatCheckboxModule, MatListModule, MatCardModule } from '@angular/material';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PackagesComponent } from './packages/packages.component';
import { EditpackageComponent } from './editpackage/editpackage.component'

import {MatTableModule} from '@angular/material/table';
import {ButtonModule} from 'primeng/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

var nav1: Routes = [
  { path: 'ahome', component: HomeComponent },
  { path: 'addpackage', component: AddpackageComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'alogin', component: AdminloginComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'editpackage/:' + 'pckid', component: EditpackageComponent }
]


@NgModule({
  imports: [
    CommonModule, MatCheckboxModule, MatListModule, MatCardModule,
    HttpClientModule, FormsModule, RouterModule.forChild(nav1),
    MatTableModule,ButtonModule,MatSlideToggleModule 
  ],
  declarations: [HomeComponent, AddpackageComponent, OffersComponent, AdminloginComponent, PackagesComponent, EditpackageComponent]
})
export class AdminModule { }
