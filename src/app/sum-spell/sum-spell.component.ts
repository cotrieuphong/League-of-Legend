import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-sum-spell',
  templateUrl: './sum-spell.component.html',
  styleUrls: ['./sum-spell.component.scss']
})
export class SumSpellComponent implements OnInit {

  spells: any;

  constructor(private data: DataService) {}

  ngOnInit() {

    this.data.getSPs().subscribe(data => {
      // const spArr = Object.keys(data['data']).map(i => data['data'][i]);
      // const spName = Object.keys(spArr).map(i => spArr[i].name);
      // const spImg = Object.keys(spArr).map(i => spArr[i].image.full);
      // this.names = spName;
      // this.imgs = spImg;
      // console.log(spArr);
      let spells = [];
      Object.keys(data['data']).map(function(name, index){
        let s = data['data'][name];
        spells.push({id:s.id, name:s.name, img:s.image.full, des:s.description, cd:s.cooldownBurn);
      });
      this.spells = spells;
      console.log(this.spells)
    });
  }
}
