import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserprofileComponent} from '../user/userprofile/userprofile.component'
import { ChangepasswordComponent } from '../changepassword/changepassword.component'
import { FormsModule } from '@angular/forms'
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, FormsModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule
  ],
  exports: [ChangepasswordComponent,UserprofileComponent],
  declarations: [ChangepasswordComponent,UserprofileComponent]
})
export class SharedModule { }
