import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {
  createStore,
  Store,
  compose,
  StoreEnhancer
} from 'redux';
import { AppStore } from './app-store';
import {
  AppState,
  default as reducer
} from './reducers';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ChatNavBarComponent } from './containers/chat-nav-bar/chat-nav-bar.component';
import { ChatThreadsComponent } from './containers/chat-threads/chat-threads.component';
import { ChatWindowComponent } from './containers/chat-window/chat-window.component';

let devtools: StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension']() : f => f;

let store: Store<AppState> = createStore<AppState>(
  reducer,
  compose(devtools)
);

export function appStoreFactory() {
  return store;
}

@NgModule({
  declarations: [
    AppComponent,
    ChatPageComponent,
    ChatNavBarComponent,
    ChatThreadsComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{
    provide: AppStore,
    useFactory: appStoreFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
