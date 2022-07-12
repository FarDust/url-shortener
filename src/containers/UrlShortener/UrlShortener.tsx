import React, { FC } from 'react';
import styles from './UrlShortener.module.scss';

interface UrlShortenerProps {}

const UrlShortener: FC<UrlShortenerProps> = () => (
  <div className={styles.UrlShortener} data-testid="UrlShortener">
    UrlShortener Component
  </div>
);

export default UrlShortener;
