import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'
import * as $ from 'jquery';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  champ$: Object;
  skins$: Object;
  allytips$: Object;
  enemytips$: Object;
  spells$: Object;
  role$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => this.champ$ = params.id)

  }

  ngOnInit() {

    window.scrollTo(0, 0);
    this.data.getChamp(this.champ$).subscribe(
      data => {
        let c;
        let s;
        let allytips;
        let enemytips;
        let spells;

        Object.keys(data['data']).map(function(name, index){
          c = data['data'][name];
          s = c.skins;
          spells = c.spells;
          allytips = c.allytips;
          enemytips = c.enemytips;

          // spellIcon.forEach(item=>{
          //   si = item;
          //   console.log(s,spellIcon)
          // })


        });


        this.champ$ = c;
        this.skins$ = s;
        this.allytips$ = allytips;
        this.enemytips$ = enemytips;
        this.spells$ = spells;

      });
    }

    ngAfterViewInit() {
      $(function() {
        var name = $('.detail-id').text();
        $('.detail-bg').css({
          background: 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + name + '_0.jpg)',
          'background-attachment': 'fixed',
          'background-size': 'cover',
          'background-position': 'center'

        });

        $('.carousel-item:first-child h3').text('Mặc định');
        var num = $('.as').text();
        $('.as').text(parseFloat(num).toFixed(3));
        var num2 = $('.as2').text();
        $('.as2').text(parseFloat(num2).toFixed(3));
        var role = $('.role').text();
        console.log(role);
        if(role == 'Assassin'){
          $('.role').text('Sát thủ');
          $('.role-img').prepend('<img src="./assets/img/assasin.png"/>');
        }
        else if(role == 'Fighter'){
          $('.role').text('Đấu sĩ');
          $('.role-img').prepend('<img src="./assets/img/fighter.png"/>');
        }
        else if(role == 'Tank'){
          $('.role').text('Chống chịu');
          $('.role-img').prepend('<img src="./assets/img/tank.png"/>');
        }
        else if(role == 'Mage'){
          $('.role').text('Pháp sư');
          $('.role-img').prepend('<img src="./assets/img/mage.png"/>');
        }
        else if(role == 'Support'){
          $('.role').text('Hỗ trợ');
          $('.role-img').prepend('<img src="./assets/img/support.png"/>');
        }else{
          $('.role').text('Xạ thủ');
          $('.role-img').prepend('<img src="./assets/img/markman.png"/>');
        }
      })

    }
}
