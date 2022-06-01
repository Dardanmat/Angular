import { Component } from '@angular/core';

@Component({
  selector: 'app-root', /*selector è intesa la tag app-root*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';
  alunni : string[] = ["Bartoli", "Belfanti", "Bencini", "Berisha","Coppi"];

  soggetto : any | null = null;

  modifica(e:any){
    this.soggetto = e;
  }

}
