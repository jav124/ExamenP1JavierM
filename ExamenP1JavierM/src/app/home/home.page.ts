import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  users: any[] = [];

  addUser(name: string, username: string) {
    if (name && username) {
      const id = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
      this.users.push({ id, name, username, isEditing: false });
    }
  }

  toggleEdit(user: any) {
    if (user.isEditing) {
    
      user.isEditing = false;
    } else {
     
      user.isEditing = true;
    }
  }

 
}


