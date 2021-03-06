import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import 'reflect-metadata';
import '../polyfills';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectronService } from './providers/electron.service';

import { HttpModule } from './http/http.module';
import { AuthModule } from './modules/auth/auth.module';
import { MessengerModule } from './modules/messenger/messenger.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Awesome Chat Client',
      maxAge: 25
    }),

    MessengerModule,
    AuthModule,

    AppRoutingModule
  ],
  providers: [
    ElectronService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
