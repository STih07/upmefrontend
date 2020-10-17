import { Component, Input } from '@angular/core';
import { UserAvatar } from 'src/app/models/user-avatar';

@Component({
  selector: 'upme-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent {

  @Input() avatar: UserAvatar;

  constructor() { }

  getAbbreviatedName() {
    return this.avatar.name.charAt(0) + this.avatar.surname.charAt(0);
  }
}
