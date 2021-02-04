import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class Ex1Controller extends Controller {

  @tracked info = "";
  @tracked content = "entrez votre texte";
  MAX = 100;

  get style(){
    if(this.MAX = this.content.length > 10){
     return "alert-info";
    }
    else if(this.MAX - this.content.length < 0){
      return "alert-danger";
    }
    else{
      return "alert-warning";
    }
  }

  get size(){
    return this.MAX - this.content.lenght;
  }

  @action save(){
    this.info = "Note sauvegardé"
  }

  @action clear(){
  this.info = "";
  this.content="";
  }

  @action update(info){
    this.info = "Note modifiée";
  }






}
