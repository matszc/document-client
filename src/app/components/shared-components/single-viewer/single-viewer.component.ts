import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {DocumentService} from '../../../services/document.service';
import {UploadService} from '../../../services/upload.service';
import {MessageService, SelectItem} from 'primeng/api';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
    selector: 'app-single-viewer',
    templateUrl: './single-viewer.component.html',
    styleUrls: ['./single-viewer.component.scss']
})
export class SingleViewerComponent implements OnInit, OnDestroy {

    caseData;
    private caseID;
    public documentTypes: SelectItem[];
    @Input() isRegistered: boolean;

    constructor(private documentService: DocumentService,
                private uploadService: UploadService,
                private messageService: MessageService,
                private route: ActivatedRoute,
                private router: Router) {
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
        if (this.isRegistered) {
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
        } else {
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

    }

    ngOnDestroy(): void {
        this.uploadService.files = [];
    }
}
