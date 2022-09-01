import { ChangeDetectorRef, Component, VERSION } from '@angular/core';
import { Subscription } from 'rxjs';
import { data } from '../../another-bootstrap';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
})
export class BComponent {

  ngVersion = VERSION.full;
  subs = new Subscription();
  valueFromLegacyApp;

  constructor(
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.subs.add(
      data.subscribe((val) => {
        this.valueFromLegacyApp = val;
        this.cd.detectChanges();
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
