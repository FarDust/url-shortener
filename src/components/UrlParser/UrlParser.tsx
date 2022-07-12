import React, { FC } from 'react';
import styles from './UrlParser.module.scss';

interface UrlParserProps {}

const UrlParser: FC<UrlParserProps> = () => (
  <div className={styles.UrlParser} data-testid="UrlParser">
    UrlParser Component
  </div>
);

export default UrlParser;
