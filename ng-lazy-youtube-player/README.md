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

## Options
You can also specify next input options:
```
  // add logo icon to the top left corner
  logoImageURL: `url('https://yt3.ggpht.com/ytc/AKedOLRiFUXWij1ofrdYuvmGGUpXC1O25vaeWIL0l4zBUg=s68-c-k-c0x00ffffff-no-rj')`,

  // makes logo icon clickable and with target=_blank and opens the channel on click
  channelId: 'UCToBwovW495AiNI9oPUJD8w', 

  // add name next to logo, can be specified separately from the logo
  videoName: 'Aerials',

  // video will be loaded after specified seconds (autoplay still will not work, Youtube policy)
  loadTimeoutSeconds: 1

  // True is default, will not work if used loadTimeoutSeconds
  autoplay: true
```