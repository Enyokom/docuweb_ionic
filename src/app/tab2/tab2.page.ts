import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  EtapesApiUrl = '';
  EtapesData = {
    Nom: '',
    Description: '',
    Statut: ''
  };

  searchTitle = '';

  constructor(private http: HttpClient) {
    this.readAPI('http://localhost:3000/etapes/')
    .subscribe((data) => {
    console.log(data);
  });
  }

  readAPI(URL: string) {
    return this.http.get(URL);
  }

  getEtapes() {
    const search = encodeURIComponent(this.searchTitle).trim();
    this.EtapesApiUrl = 'http://localhost:3000/etapes/' + search;
    this.readAPI(this.EtapesApiUrl)
      .subscribe((data) => {
      console.log(data);
      this.EtapesData.Nom = data['Nom'];
      this.EtapesData.Description = data['Description'];
      this.EtapesData.Statut = data['Statut'];

    });
}
}
