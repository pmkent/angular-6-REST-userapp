import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {
    // On route change, clear alert msg
    router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          if (this.keepAfterNavigationChange) {
            // only keep for a single location change
            this.keepAfterNavigationChange = false;
          } else {
            // clear alert
            this.subject.next();
          }
        }
      }
    );
  }

  success(message: string, keepAfterNavigationChange = false) {
    console.log('MsgSvc:success() msg : ' + message);
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string, keepAfterNavigationChange = false) {
    console.log('MsgSvc:error() msg : ' + message);
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
