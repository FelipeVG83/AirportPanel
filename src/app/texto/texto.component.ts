import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.scss']
})
export class TextoComponent implements OnInit {

  @Input() opcoes;

  constructor() { }

  ngOnInit() {
  }

}
