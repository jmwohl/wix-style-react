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
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.node,
    size: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    buttonText: 'Click me!',
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
        {...styles('root', { selected, disabled }, this.props)}
        data-hook={dataHook}
      >
        {selected && (
          <div className={styles.selectedIcon} data-hook="selected-icon">
            <Check size="24" />
          </div>
        )}

        {image && <div data-hook="thumbnail-image">{image}</div>}
        <Text
          className={styles.title}
          data-hook="thumbnail-title"
          weight="bold"
          size={size}
          tagName="div"
        >
          {title}
        </Text>
        {description && (
          <Text
            className={styles.description}
            data-hook="thumbnail-description"
            size={size}
            tagName="div"
          >
            {description}
          </Text>
        )}
      </div>
    );
  }
}

export default Thumbnail;
