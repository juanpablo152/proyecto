import { Component, OnInit } from '@angular/core';

//Diseño utilizado para que todas las demás plantillas tomes este pie de página sin tener que copiar código html en cada una de las otras páginas

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  test : Date = new Date();
  
  constructor() { }

  ngOnInit() {
  }

}
