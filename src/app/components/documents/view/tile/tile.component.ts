import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() title: string;
  @Input() id: string;

  constructor(private router: Router) { }

  public viewDoc(): void {
    this.router.navigate([`documents/view/${this.id}`]);
  }

  ngOnInit() {
  }

}
