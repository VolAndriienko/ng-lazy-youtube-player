import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID, ViewEncapsulation } from '@angular/core';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: (() => void) | undefined;
    playVideo: (() => void) | undefined;
  }
}

@Component({
  selector: 'lazy-youtube-player',
  templateUrl: './lazy-youtube-player.component.html',
  styleUrls: ['./lazy-youtube-player.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LazyYoutubePlayerComponent {
  isRequestedYoutubeWatch = false;

  @Input() videoId!: string;
  @Input() autoplay = true;

  get _previewImageURL() {
    return `url('https://i.ytimg.com/vi_webp/${this.videoId}/sddefault.webp')`;
  }

  constructor(@Inject(PLATFORM_ID) platformId: any) {
    if (this.autoplay && isPlatformBrowser(platformId)) {
      window.onYouTubeIframeAPIReady = function () {
        setTimeout(() => {
          if (this.playVideo) {
            this.playVideo();
          }
        });
      };
    }
  }

  requestYoutubeWatch() {
    const tag = document.createElement('script');
    tag.defer = true;
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    setTimeout(() => this.isRequestedYoutubeWatch = true);
  }
}
