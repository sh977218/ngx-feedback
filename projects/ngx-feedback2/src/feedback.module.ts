import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FeedbackDialogComponent} from './feedback-dialog/feedback-dialog.component';
import {FeedbackToolbarComponent} from './feedback-toolbar/feedback-toolbar.component';
import {FeedbackRectangleComponent} from './feedback-rectangle/feedback-rectangle.component';
import {FeedbackService} from './feedback.service';
import {FeedbackDirective} from './feedback.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FeedbackDialogComponent,
    FeedbackToolbarComponent,
    FeedbackRectangleComponent,
    FeedbackDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ],
  exports: [
    FeedbackDirective
  ],
  entryComponents: [
    FeedbackDialogComponent
  ],
  providers: [
    FeedbackService
  ]
})
export class FeedbackModule {
}
