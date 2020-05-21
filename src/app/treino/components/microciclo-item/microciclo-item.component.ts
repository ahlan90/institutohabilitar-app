import { Component, OnInit, Input } from '@angular/core';
import { Microciclo } from '../../models/mesociclo';

@Component({
  selector: 'app-microciclo-item',
  templateUrl: './microciclo-item.component.html',
  styleUrls: ['./microciclo-item.component.scss']
})
export class MicrocicloItemComponent implements OnInit {

  @Input() microciclo: Microciclo;

  constructor() { }

  ngOnInit(): void {
  }

}
