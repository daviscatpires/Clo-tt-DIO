import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { TweetsComponent } from './components/tweets/tweets.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import {MessagesService} from './services/messages.service';
import { AvatarComponent } from './components/avatar/avatar.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    TweetsComponent,
    HomeComponent,
    FooterComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule
  ],
  providers: [
		MessagesService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
