import { NgModule } from '@angular/core';
import {  MatIconModule, MatInputModule, MatRadioModule, MatOptionModule, MatSelectModule, MatStepperModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [        
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatOptionModule,
        MatStepperModule,
        MatSelectModule
    ],
    exports: [        
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatOptionModule,
        MatStepperModule,
        MatSelectModule
    ],
})

export class Material {

}