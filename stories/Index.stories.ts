import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

import helper from './stories.helper';

import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { LazyYoutubePlayerComponent  } from "../ng-lazy-youtube-player/src/public-api";
import { DemoComponent } from '../ng-lazy-youtube-player/src/demo.component';

export default {
  title: 'Demo',
  component: DemoComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        LazyYoutubePlayerComponent
      ],
      imports: [
        CommonModule,
        YouTubePlayerModule,
      ]
    })
  ]
} as Meta;

const Template: Story<DemoComponent> = helper.createTemplate<DemoComponent>();

export const Valid = Template.bind({});
Valid.args = {
  videoId: 'L-iepu3EtyE'
};