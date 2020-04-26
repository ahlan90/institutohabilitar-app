import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreinoPageComponent } from './pages/treino-page/treino-page.component';
import { TreinoRoutingModule } from './treino-routing.module';
import { TreinoItemComponent } from './components/treino-item/treino-item.component';
import { ExercicioItemComponent } from './components/exercicio-video/exercicio-video.component';
import { TreinoDetailPageComponent } from './pages/treino-detail-page/treino-detail-page.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { MaterialModule } from '../material/material.module';
import { MicrocicloItemComponent } from './components/microciclo-item/microciclo-item.component';

@NgModule({
  declarations: [
    TreinoPageComponent,
    TreinoItemComponent,
    ExercicioItemComponent,
    TreinoDetailPageComponent,
    MicrocicloItemComponent
  ],
  imports: [
    CommonModule,
    TreinoRoutingModule,
    YouTubePlayerModule,
    MaterialModule
  ]
})
export class TreinoModule { }
