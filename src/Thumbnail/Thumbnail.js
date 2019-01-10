import React from 'react';
import PropTypes from 'prop-types';
import styles from './Thumbnail.st.css';

import Check from 'wix-ui-icons-common/Check';
import Text from '../Text';

class Thumbnail extends React.PureComponent {
  static displayName = 'Thumbnail';

  static propTypes = {
    dataHook: PropTypes.string,

    /** Thumbnail title */
    title: PropTypes.node,
    description: PropTypes.node,
    image: PropTypes.node,
    size: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    size: 'medium',
  };

  render() {
    const {
      dataHook,
      title,
      description,
      image,
      size,
      selected,
      disabled,
    } = this.props;

    return (
      <div
        {...styles('root', { selected, disabled, size }, this.props)}
        data-hook={dataHook}
      >
        {selected && (
          <div className={styles.selectedIcon} data-hook="selected-icon">
            <Check size="24" />
          </div>
        )}

        {image && (
          <div className={styles.image} data-hook="thumbnail-image">
            {image}
          </div>
        )}
        {title && (
          <Text
            className={styles.title}
            data-hook="thumbnail-title"
            size={size}
            tagName="div"
            weight="normal"
          >
            {title}
          </Text>
        )}

        {description && (
          <Text
            className={styles.description}
            data-hook="thumbnail-description"
            size={size}
            weight="thin"
            tagName="div"
            secondary="true"
          >
            {description}
          </Text>
        )}
      </div>
    );
  }
}

export default Thumbnail;
