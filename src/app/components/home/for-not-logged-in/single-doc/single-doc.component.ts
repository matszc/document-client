import {Component, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MessageService} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';
import {DocumentService} from '../../../../services/document.service';
import {UploadService} from '../../../../services/upload.service';

@Component({
    selector: 'app-single-doc-home',
    templateUrl: './single-doc.component.html',
    styleUrls: ['./single-doc.component.scss']
})
export class SingleDocHomeComponent implements OnInit, OnDestroy {

    document = {
        from: 'user'
    };

    pdf = 'https://firebasestorage.googleapis.com/v0/b/documentos-serveros.appspot.com/o/docs%2F1554725135222_Wyk%C5%82ad%204%20robotyka.docx?alt=media&token=929be781-2f84-48ff-9567-c6030a7f9091';
    url;
    files;
    caseData;
    private caseID;

    constructor(public sanitizer: DomSanitizer,
                private documentService: DocumentService,
                private uploadService: UploadService,
                private messageService: MessageService,
                private route: ActivatedRoute,
                private router: Router) {
        this.url = sanitizer.bypassSecurityTrustResourceUrl(`https://drive.google.com/viewerng/viewer?url=${this.pdf}`);
        this.files = [
            {
                name: 'cos.docx',
                url: 'sdggds.dsg.d'
            },
            {
                name: 'dokument.docx',
                url: 'sdggds.dsg.d'
            }
        ];
    }

    addComment(value) {
        this.documentService.editComment(this.caseData.id, { comment: value}).subscribe(() => {
            this.messageService.add({severity: 'success', summary: 'Info', detail: 'Komentarz Został Zmieniony'});
        });
    }

    ngOnInit() {
        if (this.documentService.tempUnregistredToken === '' || this.documentService.notLoggedInUserEmail === '') {
            this.router.navigate(['home/for-not-logged-in']);
        } else {
            this.route.params.subscribe((params) => {
                this.caseID = params['id'];
            });
            this.documentService.getCaseUnregistred(this.caseID).subscribe((data: any) => {
                data.documents.forEach(doc => {
                    this.uploadService.files.push(new File([doc.name], doc.name, {
                        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                    }));
                });
                this.caseData = data;
            });
        }
    }
  public navigateBack() {
      this.router.navigate(['home/for-not-logged-in/view']);
  }
  public exit() {
      this.router.navigate(['home/for-not-logged-in']);
  }
    ngOnDestroy(): void {
        this.uploadService.files = [];
    }
}
