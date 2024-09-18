import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  userName:string="Ismael Parapi";
  theme:string="#7290EB";
  widthMenu:number = 30;
  visibleMenu:boolean=true;

  alternateVisibility() {
    this.visibleMenu = !this.visibleMenu;
  }
  showAll() {
    this.visibleMenu = true;
  }

  setTheme(color:string):void{
    if(this.theme=="#7290EB"){
      this.theme=color;
    }else{
      this.theme="#7290EB";
    }
  }

  setSize():void{
    this.widthMenu+=10;
    if(this.widthMenu>100){
      this.widthMenu=30;
    }
  }
}
