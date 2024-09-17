import { Injectable } from '@angular/core';
import mixpanel from 'mixpanel-browser';

@Injectable({
  providedIn: 'root'
})
export class MixpanelService {

  constructor() {
    mixpanel.init('874f28d8800d06ca29cf542aa0b618ad', {
      debug: true,
      track_pageview: true,
      persistence: 'localStorage',
    });
   }

   // Method to track events
  trackEvent(event: string, properties?: any) {
    mixpanel.track(event, properties);
  }

  // Method to identify users
  identifyUser(userId: string) {
    mixpanel.identify(userId);
    mixpanel.people.set({
      '$email': userId
    });
  }
}
