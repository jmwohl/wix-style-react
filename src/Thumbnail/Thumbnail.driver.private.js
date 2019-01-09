import { thumbnailDriverFactory as publicDriverFactory } from './Thumbnail.driver';

export const thumbnailPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
