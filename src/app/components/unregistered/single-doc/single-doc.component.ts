import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-single-doc',
    templateUrl: './single-doc.component.html',
    styleUrls: ['./single-doc.component.scss']
})
export class SingleDocComponent implements OnInit {


    constructor(private router: Router) {
    }

    ngOnInit() {

    }

    public navigateBack() {
        this.router.navigate(['home/for-not-logged-in/viewer']);
    }

    public exit() {
        this.router.navigate(['home/for-not-logged-in']);
    }

}
