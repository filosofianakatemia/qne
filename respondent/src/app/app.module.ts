import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';


import { QuestionnaireWrapperComponent } from './questionnaire/questionnaire-wrapper.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireService } from './questionnaire/questionnaire.service';

import { GroupComponent } from './group/group.component';
import { ElementComponent } from './element/element.component';
import { LikertComponent } from './element/element.likert.component';
import { TextComponent } from './element/element.text.component';
import { TextareaComponent } from './element/element.textarea.component';
import { CheckboxComponent } from './element/element.checkbox.component';
import { ProgressbarComponent } from './shared/progressbar.component';
import { InstructionComponent } from './instruction/instruction.component';
import { InstructionOptionComponent } from './instruction/instruction-option.component';
import { SummaryComponent } from './summary/summary.component';
import { ActionComponent } from './action/action.component';

import { routing } from './app.routing';
import { AppGuard } from './app.guard';
import { AppComponent } from './app.component';

import { reducer } from './shared/main.reducer';
import { GroupFilterPipe, InstructionFilterPipe, ActionFilterPipe } from './shared/shared.utils';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore(reducer),
    /**
     * @ngrx/router-store keeps router state up-to-date in the store and uses
     * the store as the single source of truth for the router's state.
     */
    RouterStoreModule.connectRouter(),
  ],
  declarations: [
    AppComponent,
    QuestionnaireWrapperComponent,
    QuestionnaireComponent,
    GroupComponent,
    ElementComponent,
    LikertComponent,
    TextComponent,
    TextareaComponent,
    CheckboxComponent,
    ProgressbarComponent,
    GroupFilterPipe,
    InstructionFilterPipe,
    InstructionComponent,
    InstructionOptionComponent,
    SummaryComponent,
    ActionComponent,
    ActionFilterPipe
  ],
  providers: [
    AppGuard,
    QuestionnaireService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
