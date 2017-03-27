import { NgModule } from "@angular/core";

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

let devtools: StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension']() : f => f;

let store: Store<AppState> = createStore<AppState>(
  reducer,
  compose(devtools)
);

export function appStoreFactory() {
  return store;
}

@NgModule({
  providers: [
    {
      provide: AppStore,
      useFactory: appStoreFactory
    }
  ]
})
export class StoreModule { }
