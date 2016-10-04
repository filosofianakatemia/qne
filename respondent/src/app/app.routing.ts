import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireWrapperComponent } from './questionnaire/questionnaire-wrapper.component'
import { AppGuard } from './app.guard'

/*
App routing.
Still W.I.P.
*/

//Routing to questionnaire by id
const appRoutes: Routes = [
  {
    // TODO: USE THIS PATH WHEN DOING 4REALS
    //path: ':questionnaire_id',
    path: '',
    canActivate: [ AppGuard ],
    component: QuestionnaireWrapperComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
