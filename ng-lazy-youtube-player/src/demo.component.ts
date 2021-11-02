import { Component, Input } from '@angular/core';

@Component({
  selector: 'lyp-demo',
  template: `
<lazy-youtube-player

  [videoId]="videoId"
  [videoIdMask]="videoIdMask"
  [channelId]="channelId"
  [logoImageURL]="logoImageURL"
  [videoName]="videoName"
  [autoplay]="autoplay"
  [loadTimeoutSeconds]="loadTimeoutSeconds"
  [loadTimeoutStrategy]="loadTimeoutStrategy"

  class="video-frame">
</lazy-youtube-player>
`,
  styles: [`
.video-frame {
  display: block;
  width: 520px;
  height: 315px;
}
`],
})
export class DemoComponent {
  @Input() videoId!: string;
  @Input() videoIdMask = '[videoId]';
  @Input() channelId!: string;
  @Input() logoImageURL!: string;
  @Input() videoName!: string;
  @Input() autoplay = true;
  @Input() loadTimeoutSeconds!: number;
  @Input() loadTimeoutStrategy: 'onInit' | 'onChanges' = 'onInit';
}
