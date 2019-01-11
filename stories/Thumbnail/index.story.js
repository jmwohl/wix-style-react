import React from 'react';
import { storySettings } from './storySettings';
import LiveCodeExample from '../utils/Components/LiveCodeExample';

import Thumbnail from '../../src/Thumbnail';

const getImageUrl = (w, h) =>
  `https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_${w},h_${h}/c78d05b79ede429fb77c9d8ec4443b93.jpg`;
const image = <img src={getImageUrl(300, 200)} />;

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
    backgroundImage: false,
  },

  exampleProps: {
    size: [
      { label: 'Medium', value: 'medium' },
      { label: 'Small', value: 'small' },
      { label: 'Tiny', value: 'tiny' },
    ],
    backgroundImage: [
      {
        label: 'On',
        value: getImageUrl(500, 500),
      },
      { label: 'Off', value: false },
    ],
    image: [
      {
        label: 'small image',
        value: <img src={getImageUrl(64, 64)} />,
      },
      { label: 'normal image', value: image },
      {
        label: 'big image',
        value: <img src={getImageUrl(400, 400)} />,
      },
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
