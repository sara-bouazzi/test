import { Component, Input } from '@angular/core';
import { AlbumService, album } from '../../services/album.service';



@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent {
  album!:album ;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    // Récupérer les menus et filtrer ceux qui sont approuvés
    this.albumService.getalbum();
  }

  
}






