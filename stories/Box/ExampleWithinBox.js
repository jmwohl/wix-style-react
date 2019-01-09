import React from 'react';

import Box from 'wix-style-react/Box';

export default () => (
  <Box
    width="400px"
    minHeight={100}
    align="center"
    verticalAlign="center"
    dataHook="storybook-box-within-box"
  >
    <Box
      inline
      height={20}
      verticalAlign="center"
      margin={3}
    >
      <span style={{fontSize: '12px'}}>
        Small
      </span>
    </Box>
    <Box
      inline
      height={40}
      verticalAlign="center"
      margin={2}
    >
      <span style={{fontSize: '24px'}}>
        Medium
      </span>
    </Box>
    <Box
      inline
      height={80}
      verticalAlign="center"
      margin={1}
    >
      <span style={{fontSize: '36px'}}>
        Large
      </span>
    </Box>
  </Box>
);
