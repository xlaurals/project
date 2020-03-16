
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScanComponent } from './scan/scan.component';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { TimePipe } from './time.pipe';
import { EndProjectComponent } from './end-project/end-project.component';
import { InProjectComponent } from './in-project/in-project.component';
import { KitDashboardComponent } from './kit-dashboard/kit-dashboard.component';
import { KitOptionsComponent } from './kit-options/kit-options.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectreasonsComponent } from './projectreasons/projectreasons.component';
import { ProfilComponent } from './profil/profil.component';
import {CodeComponent} from './code/code.component';


registerLocaleData(localeDe, 'de');
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
EndProjectComponent,
    ScanComponent,
InProjectComponent,
KitDashboardComponent,
KitOptionsComponent,
NewProjectComponent,
ProjectreasonsComponent,
    TimePipe,
CodeComponent,
    ProfilComponent,
    
  ],
  imports: [
    BrowserModule,
FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatListModule,
    MatRadioModule,
    MatProgressSpinnerModule,
MatSelectModule,
ReactiveFormsModule,

  ],
  providers: [
    Title
],

  bootstrap: [AppComponent]
})
export class AppModule { }

