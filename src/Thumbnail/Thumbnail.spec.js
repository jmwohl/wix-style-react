import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';

import Thumbnail from './Thumbnail';
import { thumbnailPrivateDriverFactory } from './Thumbnail.driver.private';

describe('Thumbnail', () => {
  const createDriver = createUniDriverFactory(thumbnailPrivateDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<Thumbnail />);

    expect(await driver.exists()).toBeTruthy();
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const driver = createDriver(<Thumbnail />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button 2 times',
    );
  });

  it('should allow changing the button text', async () => {
    const driver = createDriver(<Thumbnail buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
