
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  HostListener,
} from '@angular/core';
import { Exercicio } from '../../models/exercicio';

@Component({
  selector: 'app-exercicio-video',
  templateUrl: './exercicio-video.component.html',
  styleUrls: ['./exercicio-video.component.scss'],
})
export class ExercicioItemComponent implements OnInit, OnChanges {

  @Input() exercicio: Exercicio;

  videoId;

  innerWidth;

  constructor() {}

  ngOnInit() {
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.setInnerWidth(window.innerWidth);

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
   this.setInnerWidth(window.innerWidth);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.exercicio) {
      this.setVideoId();
    }
  }

  setVideoId() {
    let indexEq = this.exercicio.url.indexOf('=') + 1;
    this.videoId = this.exercicio.url.substring(indexEq);
  }

  setInnerWidth(value: number) {
    this.innerWidth = value * 0.93;
  }
}
