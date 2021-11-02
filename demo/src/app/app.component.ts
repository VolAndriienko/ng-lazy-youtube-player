import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<lazy-youtube-player [videoId]="videoId"
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
export class AppComponent {
  videoId: string = 'L-iepu3EtyE';
}
