import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FirebaseListObservable} from 'angularfire2';
import {IAvatar} from '../common/avatar.model';
import {AvatarService} from '../common/avatar.service';

@Component({
    selector: 'gallery-root',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit {
    publicAvatars: FirebaseListObservable<IAvatar[]>;
    userAvatars: FirebaseListObservable<IAvatar[]>;

    constructor(avatarService: AvatarService) {
        this.publicAvatars = avatarService.publicAvatars;
        this.userAvatars = avatarService.userAvatars;

        console.log('all avatars', this.publicAvatars);
        console.log('user avatars', this.userAvatars);
    }

    ngOnInit() {}

    getSortedAvatars() {
        return this.publicAvatars.map(avatars => {
            return avatars.reverse();
        });
    }
}
