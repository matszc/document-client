import {Component, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {DocumentService} from '../../../services/document.service';
import {UploadService} from '../../../services/upload.service';
import {MessageService, SelectItem} from 'primeng/api';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
    selector: 'app-single-doc',
    templateUrl: './single-doc.component.html',
    styleUrls: ['./single-doc.component.scss']
})
export class SingleDocComponent implements OnInit, OnDestroy {

    document = {
        from: 'user'
    };

    pdf = 'https://firebasestorage.googleapis.com/v0/b/documentos-serveros.appspot.com/o/docs%2F1554725135222_Wyk%C5%82ad%204%20robotyka.docx?alt=media&token=929be781-2f84-48ff-9567-c6030a7f9091';
    url;
    caseData;
    private caseID;
    public documentTypes: SelectItem[];

    constructor(public sanitizer: DomSanitizer,
                private documentService: DocumentService,
                private uploadService: UploadService,
                private messageService: MessageService,
                private route: ActivatedRoute,
                private router: Router) {
        this.url = sanitizer.bypassSecurityTrustResourceUrl(`https://drive.google.com/viewerng/viewer?url=${this.pdf}`);
        this.documentTypes = [
            {label: 'Wybierz Stan Sprawy', value: null},
            {label: 'Nierozpatrzona', value: 'not considered'},
            {label: 'Rozpatrzona', value: 'considered'},
            {label: 'Spam', value: 'spam'}
        ];
    }

    addComment(value) {
        const actualDocuments = this.caseData.documents.map(doc => doc.name);

        this.uploadService.startUpload(this.uploadService.files.filter(file => !actualDocuments.includes(file.name)))
            .then((files: any) => {
                this.documentService.editComment(this.caseData.id,
                    { comment: value, status: this.caseData.status, documents: files }).subscribe(() => {
                    this.messageService.add({severity: 'success', summary: 'Info', detail: 'Sprawa Została Zaktualizowana'});
                    this.router.navigate(['documents/view']);
                });
            });
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
          this.caseID = params['id'];
        });
        this.documentService.getCase(this.caseID).subscribe((data: any) => {
            data.documents.forEach(doc => {
                this.uploadService.files.push(new File([doc.name], doc.name, {
                    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                }));
            });
            this.caseData = data;
        });
    }

    ngOnDestroy(): void {
        this.uploadService.files = [];
    }
}
