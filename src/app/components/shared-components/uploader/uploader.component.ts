import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from '../../../services/upload.service';
import {MessageService} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-uploader',
    templateUrl: './uploader.component.html',
    styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

    public isHovering: boolean;
    @Input() role: string;
    @Input() documents;
    private caseID;

    constructor(public uploadService: UploadService,
                private messageService: MessageService,
                private route: ActivatedRoute) {
    }

    public toggleHover(event: boolean) {
        this.isHovering = event;
    }

    public onDrop(files: FileList) {
        for (let i = 0; i < files.length; i++) {
            const reg = new RegExp('(.*?)\.(docx|doc)$');

            if ((reg.test(files.item(i).name))) {
                this.uploadService.files.push(files.item(i));

            } else {
                this.messageService.add({severity: 'warn', summary: 'Warning', detail: 'Złe Rozszerzenie Pliku'});
            }
        }
    }


    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.caseID = params['id'];
        });
    }

}
