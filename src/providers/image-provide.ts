import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ImageProvider {

    serverurl = 'http://127.0.0.1:8000/';

    constructor(private http: Http) {
    }

    getImage() {
        let url = this.serverurl + 'poster/';
        let image = this.http.get(url);
        return image
    }
}
