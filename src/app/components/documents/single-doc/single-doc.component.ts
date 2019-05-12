import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {DocumentService} from '../../../services/document.service';
import {UploadService} from '../../../services/upload.service';
import {MessageService} from 'primeng/api';

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
    files;
    caseData;

    constructor(public sanitizer: DomSanitizer,
                private documentService: DocumentService,
                private uploadService: UploadService,
                private messageService: MessageService) {
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
        console.log(this.pdf);
        this.documentService.getCase(1).subscribe((data: any) => {
            data.documents.forEach(doc => {
                this.uploadService.files.push(new File([doc.name], doc.name, {
                    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                }));
            });
            console.log(data);
            this.caseData = data;
        });
    }

}
