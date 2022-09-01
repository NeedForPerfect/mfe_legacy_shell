import { ChangeDetectorRef, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { data } from '../../another-bootstrap';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
})
export class BComponent {

  constructor(
    private cd: ChangeDetectorRef
  ) {
  }

  subs = new Subscription();
  valueFromLegacyApp;

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
