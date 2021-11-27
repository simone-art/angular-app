import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostViewComponent } from './post-view/post-view.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { NavComponent } from './core/layout/nav/nav.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortifolioComponent } from './portifolio/portifolio.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostViewComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    PortifolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
