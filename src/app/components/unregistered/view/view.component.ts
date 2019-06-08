import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-home',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  public exit() {
    this.router.navigate(['home/for-not-logged-in']);
  }

  ngOnDestroy(): void {
  }


}
