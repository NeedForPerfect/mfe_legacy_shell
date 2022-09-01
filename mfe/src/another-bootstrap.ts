import { bootstrap } from '@angular-architects/module-federation-tools';
import { BehaviorSubject } from 'rxjs';
import { AnotherModule } from './app/app.another-module';
import { environment } from './environments/environment.prod';

bootstrap(AnotherModule, {
  production: environment.production
});

export const data = new BehaviorSubject('');
