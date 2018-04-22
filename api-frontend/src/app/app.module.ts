import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ApiComponent } from './api/api.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { component: HomepageComponent, path: 'homepage' },
  { component: ProfileComponent, path: 'profile' },
  { component: KnowledgeComponent, path: 'knowledge' },
  { component: ApiComponent, path: 'api' },
  { component: ContactComponent, path: 'contact' }
];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfileComponent,
    KnowledgeComponent,
    ApiComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
