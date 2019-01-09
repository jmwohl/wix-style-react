import React from 'react';
import { storySettings } from './storySettings';
import LiveCodeExample from '../utils/Components/LiveCodeExample';

import Thumbnail from '../../src/Thumbnail';
import Image from 'wix-ui-icons-common/Image';

const image = <Image width="240" height="180" />;

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: Thumbnail,
  componentPath: '../../src/Thumbnail/Thumbnail.js',

  componentProps: {
    dataHook: storySettings.dataHook,
    title: 'I am a Thumbnail',
    description: 'And I can do this and that',
    image,
    size: 'medium',
  },

  exampleProps: {
    size: [
      { label: 'Medium', value: 'medium' },
      { label: 'Small', value: 'small' },
      { label: 'Tiny', value: 'tiny' },
    ],
    image: [
      { label: 'small image', value: <Image width="64" height="64" /> },
      { label: 'normal image', value: image },
      { label: 'big image', value: <Image width="400" height="400" /> },
    ],
  },

  examples: (
    <div style={{ maxWidth: 627 }}>
      <LiveCodeExample
        compact
        title="Live code example"
        initialCode={`
<Thumbnail
  dataHook="story-thumbnail-live-example"
  />
        `}
      />
    </div>
  ),
};
