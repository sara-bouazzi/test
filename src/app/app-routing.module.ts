import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { ArchivesComponent } from './archives/archives.component';
import { AddAlbumComponent } from './add-album/add-album.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'}, 
  { path: 'header', component: HeaderComponent }, 
  { path: 'footer', component: FooterComponent },
  { path: 'albums', component: ListAlbumsComponent },
  { path: 'archives', component: ArchivesComponent },
  { path: 'addAlbum', component : AddAlbumComponent }



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
