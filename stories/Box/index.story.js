import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';

import { storySettings } from './storySettings';
import Box from '../../src/Box';
import ExampleWithinBox from './ExampleWithinBox';
import ExampleWithinBoxRaw from '!raw-loader!./ExampleWithinBox';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Box,
  componentPath: '../../src/Box',

  componentProps: () => ({
    children: 'Children',
    inline: true,
    align: 'center',
    verticalAlign: 'center',
    padding: 1,
    minWidth: 200,
    minHeight: 200,
    dataHook: storySettings.dataHook,
  }),

  exampleProps: {
    align: ['left', 'center', 'right'],
    verticalAlign: ['top', 'center', 'bottom'],
  },

  examples: (
    <div>
      <CodeExample title="Within Box" code={ExampleWithinBoxRaw}>
        <div>
          <ExampleWithinBox />
        </div>
      </CodeExample>
    </div>
  ),
};
