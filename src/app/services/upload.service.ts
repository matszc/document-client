import {Injectable} from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    task: AngularFireUploadTask;
    files: File[] = [];
    uploads = [];

    constructor(private storage: AngularFireStorage, private db: AngularFirestore) {
    }

    public startUpload() {
        this.uploads = [...this.files];
        Promise.all(
            this.uploads.map(item => this.uploadSingle(item)))
            .then((url) => {
                console.log(`All success`);
            })
            .catch((error) => {
                console.log(`Some failed: `, error.message);
            });
    }

    private uploadSingle(file) {
        const path = `docs/${Date.now()}_${file.name}`;
        const ref = this.storage.ref(path);
        return new Promise((p) => {
            this.storage.upload(path, file).then(() => {
                ref.getDownloadURL().subscribe(u => {
                    return new Promise(() => {
                        console.log(u);

                        // TODO request
                        p();
                    });
                });
            });
        });

    }


}
