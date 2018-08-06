import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  champs$: Object;
  string$: String;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getChamps().subscribe(
      data => {
        let champs = [];
        Object.keys(data['data']).map(function(name, index){
          let c = data['data'][name];
          champs.push({name:c.name, img:c.image.full, id:c.id, tag:c.tags});
        });
        console.log(champs)
        this.champs$ = champs;
      });

  }

  press(term: string): void {
    console.log(term);
  }

}
