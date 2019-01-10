import React from 'react';
import PropTypes from 'prop-types';
import styles from './Thumbnail.st.css';

import Check from 'wix-ui-icons-common/Check';
import Text from '../Text';

class Thumbnail extends React.PureComponent {
  static displayName = 'Thumbnail';

  static propTypes = {
    dataHook: PropTypes.string,

    /** Title node */
    title: PropTypes.node,

    /** Description node */
    description: PropTypes.node,

    /** Image to display in thumbnail */
    image: PropTypes.node,

    /** Thumbnail size */
    size: PropTypes.oneOf(['tiny', 'small', 'medium']),

    /** Set selected state of thumbnail */
    selected: PropTypes.bool,

    /** Set disabled state of thumbnail */
    disabled: PropTypes.bool,

    /** Overrides title, description and image properties */
    backgroundImage: PropTypes.node,
  };

  static defaultProps = {
    size: 'medium',
    selected: false,
    disabled: false,
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
