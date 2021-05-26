import { Injectable } from '@angular/core';
import {PHOTOS} from "../PHOTOS";

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  constructor() { }
  getImages():string[]{
    return PHOTOS
  }
}
