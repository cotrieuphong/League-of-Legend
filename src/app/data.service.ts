import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getChamps() {
    return this.http.get('http://ddragon.leagueoflegends.com/cdn/8.15.1/data/vn_VN/champion.json');
  }
  getChamp(champName) {
    return this.http.get('http://ddragon.leagueoflegends.com/cdn/8.15.1/data/vn_VN/champion/'+champName+'.json');
  }

}
