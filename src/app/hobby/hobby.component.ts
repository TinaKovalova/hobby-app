import { Component, OnInit } from '@angular/core';
import {HobbyService} from "../services/hobby.service";

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {

  titleHobby:string='Искать приключения';
  description: string ='Мне скучно ничего не делать. Поэтому, когда мне становится тоскливо, я ищу себе приключения...';
  images?:string[]=[];


  constructor(private hobbyService:HobbyService) { }

  ngOnInit(): void {
    this.setImages()
  }
  setImages():void{
    this.images=this.hobbyService.getImages()
  }

}
