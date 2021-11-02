import { isPlatformBrowser } from '@angular/common';
import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { OnChanges, OnDestroy } from '@angular/core';
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
export class LazyYoutubePlayerComponent implements OnChanges, OnDestroy, OnInit {
  @ViewChild(' previewImage') previewImage!: ElementRef;

  isRequestedYoutubeWatch = false;

  @Input() videoId!: string;
  @Input() channelId!: string;
  @Input() autoplay = true;
  @Input() videoName!: string;
  _videoName = '';

  @Input() videoIdMask = '[videoId]';
  @Input() previewImageURL = '';
  defaultPreviewImageURL = `url('https://i.ytimg.com/vi_webp/${this.videoIdMask}/sddefault.webp')`;
  _previewImageURL = '';

  @Input() logoImageURL = '';
  _logoImageURL = '';

  @Input() loadTimeoutStrategy: 'onInit' | 'onChanges' = 'onInit';
  @Input() loadTimeoutSeconds!: number;
  timeoutIndex!: number;
  isBrowser: boolean = false;

  _videoURL = '';
  _channelURL = '';

  constructor(@Inject(PLATFORM_ID) platformId: any) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.setAutoPlay();
  }

  ngOnInit(): void {
    if (this.loadTimeoutStrategy === 'onInit') {
      this.setLoadTimer();
    }
  }

  ngOnDestroy(): void {
    if (this.timeoutIndex) {
      window.clearTimeout(this.timeoutIndex);
    }
  }

  ngOnChanges(): void {
    this._previewImageURL = this.getPreviewImageURL();
    this._logoImageURL = this.getLogoImageURL();
    this._videoURL = this.getVideoURL();
    this._channelURL = this.getChannelURL();
    this._videoName = this.getVideoName();

    if (this.loadTimeoutStrategy === 'onChanges') {
      this.setLoadTimer();
    }
  }

  requestYoutubeWatch(event: Event | undefined = undefined) {
    if (!event || (event.target as HTMLDivElement).classList.contains('preview-image')) {
      const tag = document.createElement('script');
      //tag.defer = true;
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      setTimeout(() => this.isRequestedYoutubeWatch = true);
    }
  }

  clickWatch() {
    (this.previewImage?.nativeElement as HTMLDivElement)?.click();
  }

  private getPreviewImageURL() {
    return (this.previewImageURL || this.defaultPreviewImageURL).replace(this.videoIdMask, this.videoId);
  }

  private getLogoImageURL() {
    return this.logoImageURL;
  }

  private setAutoPlay() {
    if (this.autoplay && this.isBrowser) {
      window.setTimeout(() => {
        window.onYouTubeIframeAPIReady = function () {
          window.setTimeout(() => {
            if (this.playVideo) {
              this.playVideo();
            }
          });
        };
      });
    }
  }

  private setLoadTimer() {
    if (this.loadTimeoutSeconds && this.isBrowser) {
      this.timeoutIndex = window.setTimeout(() =>
        this.clickWatch(), this.loadTimeoutSeconds * 1000)
    }
  }

  private getVideoURL() {
    return `https://www.youtube.com/watch?v=` + this.videoId;
  }

  private getChannelURL() {
    return `https://www.youtube.com/channel/` + this.channelId;
  }

  private getVideoName() {
    return this.videoName;
  }
}
