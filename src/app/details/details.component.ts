import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
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
  e4: Object;
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
        let s4;
        Object.keys(data['data']).map(function(name, index){
          c = data['data'][name];
          s = c.skins;
          spells = c.spells;
          allytips = c.allytips;
          enemytips = c.enemytips;
          // s4 = Object.keys(spells).map(i => spells[i]);
          // console.log(s4)
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

        // console.log($('.spell-name').text())

        $('.carousel-item:first-child h3').text('Mặc định');
        $('.colorDDDD77').css({
          'color': '#DDDD77'
        });
        $('.colorFF8C00').css({
          'color': '#FF8C00'
        });
        $('.colorFF9900').css({
          'color': '#FF9900'
        });
        $('.colorFFFFFF').css({
          'color': '#cb4949'
        });
        $('.color99FF99').css({
          'color':'#99FF99'
        });
        // var num = $('.as').text();
        // $('.as').text(parseFloat(num).toFixed(3));
        // var num2 = $('.as2').text();
        // $('.as2').text(parseFloat(num2).toFixed(3));
        $('.as').each(function(){
          var num = $(this).text();
          $(this).text(parseFloat(num).toFixed(2))
        })
        $('.as2').each(function(){
          var num = $(this).text();
          $(this).text(parseFloat(num).toFixed(0))
        })
        var role = $('.role').text();
        if(role == 'Assassin'){
          $('.role').text('Sát thủ');
          $('.role-img').prepend('<img src="./assets/img/Assassin.png"/>');
        }
        else if(role == 'Fighter'){
          $('.role').text('Đấu sĩ');
          $('.role-img').prepend('<img src="./assets/img/Fighter.png"/>');
        }
        else if(role == 'Tank'){
          $('.role').text('Chống chịu');
          $('.role-img').prepend('<img src="./assets/img/Tank.png"/>');
        }
        else if(role == 'Mage'){
          $('.role').text('Pháp sư');
          $('.role-img').prepend('<img src="./assets/img/Mage.png"/>');
        }
        else if(role == 'Support'){
          $('.role').text('Hỗ trợ');
          $('.role-img').prepend('<img src="./assets/img/Support.png"/>');
        }else{
          $('.role').text('Xạ thủ');
          $('.role-img').prepend('<img src="./assets/img/Marksman.png"/>');
        }
      })

    }
}
