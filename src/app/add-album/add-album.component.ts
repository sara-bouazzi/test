import { Component } from '@angular/core';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent {
  onSubmit(form: any) {
    if (form.valid) {

      const newalbum = {
        title: form.value.title,
        image: '', // Ajouter une image par défaut ou une entrée
        };

        console.log(newalbum);
    }

}



}
