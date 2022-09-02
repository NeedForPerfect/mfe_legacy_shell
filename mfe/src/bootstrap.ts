import { bootstrap } from '@angular-architects/module-federation-tools';
import { BehaviorSubject } from 'rxjs';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment.prod';

bootstrap(AppModule, {
  production: environment.production
});

export const users$ = new BehaviorSubject([]);

export const elementName = 'angular1-element';