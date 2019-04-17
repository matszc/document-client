import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-single-doc',
  templateUrl: './single-doc.component.html',
  styleUrls: ['./single-doc.component.scss']
})
export class SingleDocComponent implements OnInit {

  document = {
    from: 'user'
  };

  pdf = 'https://firebasestorage.googleapis.com/v0/b/documentos-serveros.appspot.com/o/docs%2F1554725135222_Wyk%C5%82ad%204%20robotyka.docx?alt=media&token=929be781-2f84-48ff-9567-c6030a7f9091';
  url;

  constructor(public sanitizer: DomSanitizer) {
    this.url = sanitizer.bypassSecurityTrustResourceUrl(`https://drive.google.com/viewerng/viewer?url=${this.pdf}`);
  }

  ngOnInit() {
    console.log(this.pdf);
  }

}
