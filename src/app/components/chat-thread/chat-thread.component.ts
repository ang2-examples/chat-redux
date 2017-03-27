import {Component, EventEmitter} from '@angular/core';
import {Thread} from "../../models/Thread";

@Component({
  inputs: ['thread', 'selected'],
  outputs: ['onThreadSelected'],
  selector: 'chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.css']
})
export class ChatThreadComponent {

  thread: Thread;
  selected: boolean;
  onThreadSelected: EventEmitter<Thread>;

  constructor() {
    this.onThreadSelected = new EventEmitter<Thread>();
  }

  clicked(event: any): void {
    this.onThreadSelected.emit(this.thread);
    event.preventDefault();
  }
}
