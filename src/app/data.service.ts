import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getChamps() {
    return this.http.get('http://ddragon.leagueoflegends.com/cdn/8.16.1/data/vn_VN/champion.json');
  }
  getChamp(champName) {
    return this.http.get('http://ddragon.leagueoflegends.com/cdn/8.16.1/data/vn_VN/champion/'+champName+'.json');
  }

  getSPs() {
    return this.http.get('http://ddragon.leagueoflegends.com/cdn/7.2.1/data/vn_VN/summoner.json')
  }

}
