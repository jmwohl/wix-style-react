import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import LiveCodeExample from '../utils/Components/LiveCodeExample';
import MultiSelect from '../../src/MultiSelect';

import {
  tab,
  importExample,
  description,
  playground,
  testkit,
} from 'wix-storybook-utils/Sections';

import {
  renderSection,
  IncludedComponents,
  Title,
  SubTitle,
} from '../UXStoryTemplate';

import readmeApi from '../../src/MultiSelect/README.API.md';
import playgroundStoryConfig from '../components/MultiSelect/MultiSelectPlaygroundConfig';

import ExampleSelectSimpleRaw from '!raw-loader!./ExampleSelectSimple';
import ExampleSelectAutocompleteRaw from '!raw-loader!./ExampleSelectAutocomplete';
import ExampleSuggestionsRaw from '!raw-loader!./ExampleSuggestions';
import ExampleTagInputRaw from '!raw-loader!./ExampleTagInput';
import ExampleTagInputSelectionRaw from '!raw-loader!./ExampleTagInputSelection';

import ExampleReorderableRaw from '!raw-loader!./ExampleReorderable';

import ExampleThumbVariations from './ExampleThumbVariations';
import ExampleThumbVariationsRaw from '!raw-loader!./ExampleThumbVariations';

import { storySettings } from './storySettings';

import styles from './styles.scss';

/**
 * Strips imports and exports
 *
 */
function processLive(code, ComponentName, label) {
  const filteredCode = code
    .split('\n')
    .filter(line => !line.startsWith('import') && !line.startsWith('export'))
    .join('\n');

  return filteredCode + '\n\n' + createExampleRender(ComponentName, label);
}

function createExampleRender(Component, label) {
  return `
render(
  <div style={{ width: '600px' }}>
    <FormField label="${label}">
      <${Component} />
    </FormField>
  </div>,
);
`;
}

const examples = (
  <div>
    <Title>Examples</Title>
    <SubTitle>Bihavior</SubTitle>

    <LiveCodeExample
      compact
      title="Select"
      initialCode={processLive(
        ExampleSelectSimpleRaw,
        'CountrySelection',
        'Select Countries',
      )}
      autoRender={false}
    />

    <LiveCodeExample
      compact
      title="Select + Autocomplete"
      initialCode={processLive(
        ExampleSelectAutocompleteRaw,
        'CountrySelection',
        'Select Countries',
      )}
      autoRender={false}
    />

    <LiveCodeExample
      compact
      title="Tag Input"
      initialCode={processLive(
        ExampleTagInputRaw,
        'ExampleTagInput',
        'Enter Any Tag',
      )}
      autoRender={false}
    />

    <LiveCodeExample
      compact
      title="Tag Input + Suggestions"
      initialCode={processLive(
        ExampleSuggestionsRaw,
        'ContactsInput',
        'Enter Contact Emails',
      )}
      autoRender={false}
    />

    <LiveCodeExample
      compact
      title="Tag Input + Selection"
      initialCode={processLive(
        ExampleTagInputSelectionRaw,
        'CountryInput',
        'Enter Or Select Countries',
      )}
      autoRender={false}
    />

    <LiveCodeExample
      compact
      title="Reorderable"
      initialCode={processLive(
        ExampleReorderableRaw,
        'ExampleReorderable',
        'Reorderable Numbers',
      )}
      autoRender={false}
    />

    <CodeExample title="ThumbVariations" code={ExampleThumbVariationsRaw}>
      <div className={styles.exampleContainer}>
        <ExampleThumbVariations />
      </div>
    </CodeExample>
  </div>
);

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: MultiSelect,
  componentPath: '../../src/MultiSelect',
  ...playgroundStoryConfig,
  sections: [
    tab({
      title: 'Description',
      sections: [
        description({
          text:
            'A component for selecting/creating multiple values, and displaying them as tags.',
        }),

        renderSection(
          <IncludedComponents componentNames={['MultiSelect', 'Tag']} />,
        ),
        importExample({
          source: "import MultiSelect from 'wix-style-react/MultiSelect';",
        }),

        // liveCode({
        //   title: 'Themes',
        //   compact: true,
        //   source: ExampleSelectSimpleLive,
        //   components: { MultiSelect },
        // }),

        renderSection(examples),
      ],
    }),

    tab({
      title: 'Playground',
      sections: [playground()],
    }),

    tab({
      title: 'API',
      // Not using built-in api because we can not override props' description of InputWithOptions
      sections: [renderSection(readmeApi)],
    }),

    tab({
      title: 'Testkit',
      sections: [testkit()],
    }),
  ],
};
