import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  champs$: Object;
  input: string = null;
  results = [];
  names = [];
  ids = [];

  constructor(private data: DataService) { }

  ngOnInit() {

    $(function(){

      $('.card-holder').on('mouseenter', function(e){

        let width = $(this).innerWidth();
        let height = $(this).innerHeight();
        let mouseX = e.pageX - $(this).offset().left;
        let mouseY = e.pageY - $(this).offset().top;
        let x = (width/2 - mouseX)/6;
        let y = -(height/2 - mouseY)/40;

        $(this).siblings().find('.card-info').addClass('d');
        $(this).find('.card-info').css({
          'transform':'rotateX('+y+'deg) rotateY('+x+'deg) translateZ(30px)',
          'transition':'all .5s ease!important'
        })

      })

      function hide(){
        $('.card-holder').on('mousemove', function(e) {

          let width = $(this).innerWidth();
          let height = $(this).innerHeight();
          let mouseX = e.pageX - $(this).offset().left;
          let mouseY = e.pageY - $(this).offset().top;
          let x = (width/2 - mouseX)/6;
          let y = -(height/2 - mouseY)/40;

          $(this).find('.card-info').css({
            'transform':'rotateX('+y+'deg) rotateY('+x+'deg) translateZ(50px)',
            'transition':'all .3s ease'
          })
          $(this).find('.card-info .loading-screen').css({
            'transform': 'scale(1.35) translateX('+x/1.5+'px) translateY('+y*2+'px) translateZ(-20px)'
          })
        })

        $('.card-holder').on('mouseleave', function() {
          $(this).siblings().find('.card-info').removeClass('d');
          $(this).find('.card-info').css({
            'transform':'rotateX(0deg) rotateY(0deg)',
            'transition':'all .5s ease'
          })
          $(this).find('.card-info .loading-screen').css({
            'transform': 'scale(1.2) translateX(0px) translateY(0px) translateZ(0px)',
          })
        })

      }
      setTimeout(hide, 800);

      $('#text').on('keyup', function(){
        $('.champ-search').addClass('animte');
        $('.champ-search p:contains("AurelionSol")').text('Aurelion Sol');
        $('.champ-search p:contains("MissFortune")').text('Miss Fortune');
        $('.champ-search p:contains("MonkeyKing")').text('Monkey King');
        $('.champ-search p:contains("MasterYi")').text('Master Yi');
        $('.champ-search p:contains("Chogath")').text("Cho'Gath");
        $('.champ-search p:contains("Khazix")').text("Cho'Gath");
        $('.champ-search p:contains("Kogmaw")').text("Kha'Zix");
        $('.champ-search p:contains("Kaisa")').text("Kai'Sa");
        $('.champ-search p:contains("Velkoz")').text("Vel'Koz");
        $('.champ-search p:contains("TwistedFate")').text("Twisted Fate");
        $('.champ-search p:contains("TahmKench")').text("Tahm Kench");
        $('.champ-search p:contains("JavanIV")').text("Javan IV");
        $('.info-container').css({
          'display' : 'none'
        })
      })

      $('#text').on('keyup', function(){

        if(!$('#text').val()){
          $('.ds').css({
            'display' : 'block'
          })
        }
        else{
          $('.ds').css({
            'display' : 'none'
          })
        }
      })

    })

    this.data.getChamps().subscribe(
      data => {

        const champArr = Object.keys(data['data']).map(i => data['data'][i])

        const champName = Object.keys(champArr).map(i => champArr[i].name);
        const champId = Object.keys(champArr).map(i => champArr[i].id);
        this.names = champName;
        this.ids = champId;

        let champs = [];
        Object.keys(data['data']).map(function(name, index){
          let c = data['data'][name];
          champs.push({name:c.name, id:c.id, tag:c.tags[0]});
        });
        this.champs$ = champs;
    });

  }

  ngAfterViewInit() {
    $(function() {
      $('.role-name').hide();
      var role = $('.champion-name').text();
      $('.role-name').text('xạ thủ');
      console.log(role);
      if(role == 'Assassin'){
        $('.role-name').text('Sát thủ');
        $('.role-img').prepend('<img src="./assets/img/assasin.png"/>');
      }
      else if(role == 'Fighter'){
        $('.role-name').text('Đấu sĩ');
        $('.role-img').prepend('<img src="./assets/img/fighter.png"/>');
      }
      else if(role == 'Tank'){
        $('.role-name').text('Chống chịu');
        $('.role-img').prepend('<img src="./assets/img/tank.png"/>');
      }
      else if(role == 'Mage'){
        $('.role-name').text('Pháp sư');
        $('.role-img').prepend('<img src="./assets/img/mage.png"/>');
      }
      else if(role == 'Support'){
        $('.role-name').text('Hỗ trợ');
        $('.role-img').prepend('<img src="./assets/img/support.png"/>');
      }else{
        $('.role-name').text('Xạ thủ');
        $('.role-img').prepend('<img src="./assets/img/markman.png"/>');
      }
    })
  }

  change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      " "
    );
    str = str.replace(/ + /g, " ");
    str = str.trim();
    return str;
  }

  getNames(event) {
    if(event.target.value == null || event.target.value == '' || event.target.value == '.' ){
      this.results = [];
      return;
    }
    let value = this.change_alias(event.target.value);
    let nameRegex = new RegExp('\\b^' + value, "gi");
    // let matched = this.names.filter(name => name.match(nameRegex));
    // this.results = matched;
    let matchedId = this.ids.filter(name => name.match(nameRegex));
    this.results = matchedId;
    console.log(this.results)
    // let ci = matched.map(item => item.replace(/\s/g,''));
    // this.imgs = ci;
  }

  // bindResultToInput(result){
  //   this.input = result;
  //   this.results = [];
  // }

}
