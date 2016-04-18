import { Component, provide } from 'angular2/core';
import { HTTP_PROVIDERS, XHRBackend } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
        LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { SubscriptionComponent } from './subscription/subscription.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Subscription } from './subscription/subscription';

@Component({
  selector: 'subscription-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    Subscription,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
  ]
})
@RouteConfig([
  { path: '/Dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/Subscription/...', name: 'Subscription', component: SubscriptionComponent }
])
export class AppComponent {
  constructor() {
  }

}