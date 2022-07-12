import React, { lazy, Suspense } from 'react';

const LazyUrlParser = lazy(() => import('./UrlParser'));

const UrlParser = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUrlParser {...props} />
  </Suspense>
);

export default UrlParser;
