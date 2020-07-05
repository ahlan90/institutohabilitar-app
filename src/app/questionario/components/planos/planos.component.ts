import { Component, OnInit } from '@angular/core';
import { PlanoService } from '../../services/plano.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Plano } from '../../models/plano';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent implements OnInit {

  planos: Observable<Plano[]>;

  constructor(
    private planoService: PlanoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.planos = this.planoService.getAll();
  }

  redirectUrl(link) {
    window.open(link, '_blank');
    this.router.navigate(['/']);
  }
}
