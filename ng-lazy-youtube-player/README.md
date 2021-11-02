# Lazy Youtube Player

## To install please run next command

npm i ng-lazy-youtube-player

## To use, include module into imports and use lazy-youtube-player selector.

```
import { LazyYoutubePlayerModule } from 'ng-lazy-youtube-player'; // add it

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    LazyYoutubePlayerModule, // add it
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

And usage:
```
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
```