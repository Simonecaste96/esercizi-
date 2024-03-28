import { Injectable } from '@angular/core';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class ServicePersonalService {
contents:Content[]=[]
 
constructor() { 
   
}
async getContent (){
  let response = await fetch('../../assets/db.json');
  let data = await response.json();
  return data;
}

}
