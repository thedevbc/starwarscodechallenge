import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  movies = [
    { title: 'Star Wars Episode IV - A New Hope', selected: false, enabled: true },
    { title: 'Star Wars Episode V - The Empire Strikes Back', selected: false, enabled: true },
    { title: 'Star Wars Episode VI - Return of the Jedi', selected: false, enabled: true },
    { title: 'Star Wars Episode I - The Phantom Menace', selected: false, enabled: true },
    { title: 'Star Wars Episode II - Attack of the Clones', selected: false, enabled: true },
    { title: 'Star Wars Episode III - Revenge of the Sith', selected: false, enabled: true },
    { title: 'Star Wars Episode VII - The Force Awakens', selected: false, enabled: true },
    { title: 'Star Wars Episode IX', selected: false, enabled: false },
  ]



  onMovieClick(movie) {
    console.log(movie);
  }

}
