import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { LazyYoutubePlayerComponent } from './lazy-youtube-player.component';

@NgModule({
  declarations: [
    LazyYoutubePlayerComponent
  ],
  imports: [
    YouTubePlayerModule,
    CommonModule
  ],
  exports: [
    LazyYoutubePlayerComponent
  ]
})
export class LazyYoutubePlayerModule { }
