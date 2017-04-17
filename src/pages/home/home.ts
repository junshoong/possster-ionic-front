import { Component } from '@angular/core';
import { ImageProvider } from '../../providers/image-provide';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [ImageProvider]
})
export class HomePage {

    slides:any[];

    constructor(private image: ImageProvider) {
    }

    getImage() {
        console.log('searching for posters');
        this.image.getImage().subscribe(
            data => {
                this.slides = data.json().results;
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
    }
}
