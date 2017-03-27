import { Component, Inject } from '@angular/core';
import { AppStore } from '../../app-store';
import { Store } from 'redux';
import {
  AppState,
  getUnreadMessagesCount
} from '../../reducers';

@Component({
  selector: 'chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})
export class ChatNavBarComponent {

  unreadMessagesCount: number;
  logoSrc: string;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    store.subscribe(() => this.updateState());
    this.updateState();

    this.logoSrc = require('../../images/logos/ng-book-2-minibook.png');
  }

  updateState() {
    this.unreadMessagesCount = getUnreadMessagesCount(this.store.getState());
  }
}
