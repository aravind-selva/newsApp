import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world-cup',
  templateUrl: './world-cup.component.html',
  styleUrls: ['./world-cup.component.css']
})
export class WorldCupComponent implements OnInit {

  constructor() { 
    // this.teams.push('India')
    // this.teams.push('Australia')
    // this.teams.push('SA')
    // this.teams.push('NZ')
    // this.teams.push('WI')
    // this.teams.push('BAN')
    // this.teams.push('PAK')
    // this.teams.push('SL')
    // this.teams.push('AFG')
    // this.teams.push('KEN')

    this.teams.push({name:'India',wins:2})
    this.teams.push({name:'Australia',wins:5})
    this.teams.push({name:'SA',wins:0})
    this.teams.push({name:'NZ',wins:0})
    this.teams.push({name:'WI',wins:2})
    this.teams.push({name:'BAN',wins:0})
    this.teams.push({name:'PAK',wins:1})
    this.teams.push({name:'SL',wins:0})
    this.teams.push({name:'AFG',wins:0})
    this.teams.push({name:'KEN',wins:0})
  }

  year:string="2019"
  path:string="/assets/1.PNG"
  winner:string;
kanna: string="nalla payan"
  toggleWinner:string;
  showWinner:boolean;
  no:number=81;
  no1:number=100;
  arry:any=[1,2,3,4]
  arry2:any=[2,3,5,6]
  // getWinner(country){
  //   console.log("The winner is "+ country)
  // }
teams:any=[]
  getWinner=(country)=>{console.log("The winner is "+ country)
  this.winner="India" }

  toggle=(cou)=>{this.showWinner=!this.showWinner
                this.toggleWinner=cou
                }
  ngOnInit() {
 

  }

}
