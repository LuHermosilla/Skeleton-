import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss'],
})
export class ExperienciaLaboralComponent  implements OnInit {

  user = {usuario: '', password: ''};
  empresa = "";
  ano_inicio = "";
  ano_termino = "";
  actualmente = "SI";
  cargo = "";

  constructor() { }

  ngOnInit() {}

}
