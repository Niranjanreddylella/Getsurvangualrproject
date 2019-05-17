import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { ProfileComponent } from './profile/profile.component';
import { DosurveyComponent } from './dosurvey/dosurvey.component'
import { ClientModule } from '../client/client.module';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module'
var nav3: Routes = [
  { path: 'uhome', component: HomeComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'uprofile', component: UserprofileComponent },
  { path: 'updateProfile/:id', component: UpdateprofileComponent },
  { path: 'myprofile', component: ProfileComponent },
  { path: 'dosurvey/:' + 'i', component: DosurveyComponent }
]

@NgModule({
  imports: [
    CommonModule, ClientModule,
    HttpClientModule, FormsModule, RouterModule.forChild(nav3), NgxPaginationModule, OrderModule,
    MatSelectModule, MatFormFieldModule, MatInputModule, SharedModule

  ],
  exports: [
    UserprofileComponent, UpdateprofileComponent
  ],
  declarations: [HomeComponent, FeedbackComponent,
    UpdateprofileComponent, ProfileComponent, DosurveyComponent
  ]
})
export class UserModule { }
