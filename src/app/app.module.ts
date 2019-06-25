import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import {URL_API} from '../environments/environment';
import {AlertsService} from './services/alerts.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

const config: SocketIoConfig = {url: URL_API, options: {}};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    SocketIoModule.forRoot(config),
    AppRoutingModule,
  HttpClientModule,
ComponentsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AlertsService,
    LocalNotifications
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
