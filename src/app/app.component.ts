import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deletefront';

  public load: boolean = false;
  public loading: string = 'Cargando.';


  ngOnInit(): void {
    this.changeLoad()
    setTimeout(()=>{this.load=true;},5000)
  }

  changeLoad(){

      setInterval(()=>{this.loading += '.';
      if(this.loading==='Cargando....')
      {this.loading='Cargando.';}},600)

  }


}
