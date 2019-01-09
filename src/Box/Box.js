import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Box.scss';

const spacingUnit = 6;
const horizontalAlignmentValues = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};
const verticalAlignmentValues = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

/** In case the value is a number, it's multiplied by the spacing unit. Otherwise, it's converted to a string */
const formatSpacingValue = value => isFinite(value) ? value * spacingUnit : `${value}`;

const Box = props => {
  const {
    dataHook,
    children,
    inline,
    align,
    verticalAlign,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    minWidth,
    maxWidth,
    width,
    minHeight,
    maxHeight,
    height,
  } = props;
  const rootClassNames = classNames(styles.root, {
    [styles.inline]: inline,
  });
  const rootStyles = {
    // Alignment
    justifyContent: horizontalAlignmentValues[align],
    alignItems: verticalAlignmentValues[verticalAlign],

    // Spacing
    padding: formatSpacingValue(padding),
    paddingTop: formatSpacingValue(paddingTop),
    paddingRight: formatSpacingValue(paddingRight),
    paddingBottom: formatSpacingValue(paddingBottom),
    paddingLeft: formatSpacingValue(paddingLeft),
    margin: formatSpacingValue(margin),
    marginTop: formatSpacingValue(marginTop),
    marginRight: formatSpacingValue(marginRight),
    marginBottom: formatSpacingValue(marginBottom),
    marginLeft: formatSpacingValue(marginLeft),

    // Sizing
    minWidth,
    maxWidth,
    width,
    minHeight,
    maxHeight,
    height,
  };

  return (
    <div data-hook={dataHook} className={rootClassNames} style={rootStyles} >
      {children}
    </div>
  );
};

Box.displayName = 'Box';

Box.propTypes = {
  /** Any element to be rendered inside */
  children: PropTypes.node.isRequired,
  /** Defines if the box behaves as an inline element */
  inline: PropTypes.bool,
  /** Defines how the children are aligned according to the X axis */
  align: PropTypes.string,
  /** Defines how the children are aligned according to the Y axis */
  verticalAlign: PropTypes.string,
  /** Sets padding on all sides */
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Sets padding on the top */
  paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Sets padding on the right */
  paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Sets padding on the bottom */
  paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Sets padding on the left */
  paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Sets margin on all sides */
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Sets margin on the top */
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Sets margin on the right */
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Sets margin on the bottom */
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Sets margin on the left */
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Sets the minimum width of the box */
  minWidth: PropTypes.string,
  /** Sets the maximum width of the box */
  maxWidth: PropTypes.string,
  /** Sets the width of the box */
  width: PropTypes.string,
  /** Sets the minimum height of the box */
  minHeight: PropTypes.string,
  /** Sets the maximum height of the box */
  maxHeight: PropTypes.string,
  /** Sets the height of the box */
  height: PropTypes.string,
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
};

Box.defaultProps = {
  inline: false,
};

export default Box;
