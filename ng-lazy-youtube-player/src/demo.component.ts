import { Component, Input } from '@angular/core';

@Component({
  selector: 'lyp-demo',
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
export class DemoComponent {
  @Input() videoId!: string;
}
