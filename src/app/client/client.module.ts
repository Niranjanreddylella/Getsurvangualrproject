import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { OrderModule } from 'ngx-order-pipe'
import { NgxPaginationModule } from 'ngx-pagination';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

import 'hammerjs';
import { NgDragDropModule } from 'ng-drag-drop';

import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SurveyComponent } from './survey/survey.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { PackagesComponent } from './packages/packages.component';
import { QuestionsComponent } from './questions/questions.component';
import { YesNoComponent } from './yes-no/yes-no.component';
import { MultiComponent } from './multi/multi.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TextfieldComponent } from './textfield/textfield.component';
import { RatingComponent } from './rating/rating.component';
import { ClientprofileComponent } from './clientprofile/clientprofile.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientupdateComponent } from './clientupdate/clientupdate.component';
import { QuestionComponent } from './question/question.component';
import { PredefinedComponent } from './predefined/predefined.component';
import { AddfirmComponent } from './addfirm/addfirm.component'
import { SharedModule } from '../shared/shared.module'

var nav2: Routes = [
  { path: 'chome', component: HomeComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'subscribe/' + ':a', component: SubscribeComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'questions/' + ':a', component: QuestionsComponent },
  { path: 'multi', component: MultiComponent },
  { path: 'mselect', component: MultiSelectComponent },
  { path: 'yesno', component: YesNoComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'textfield', component: TextfieldComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'cprofile', component: ProfileComponent },
  { path: 'cupdate/:' + 'cid', component: ClientupdateComponent },
  { path: 'pre', component: PredefinedComponent },
  { path: 'addfirm', component: AddfirmComponent }
]

@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatIconModule,
    HttpClientModule, FormsModule, RouterModule.forChild(nav2), NgxPaginationModule, OrderModule,
    MatFormFieldModule, NgDragDropModule.forRoot(), MatInputModule, MatSelectModule, SharedModule
  ],
  exports: [
    ClientprofileComponent, DropdownComponent, MultiComponent, MultiSelectComponent,
    RatingComponent, TextfieldComponent, YesNoComponent
  ],
  declarations: [HomeComponent, SurveyComponent, SubscribeComponent,
    PackagesComponent, QuestionsComponent, YesNoComponent, MultiComponent,
    MultiSelectComponent, DropdownComponent, TextfieldComponent, RatingComponent,
    ClientprofileComponent, ProfileComponent, ClientupdateComponent, QuestionComponent,
    PredefinedComponent, AddfirmComponent]
})
export class ClientModule { }
