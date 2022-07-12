import React, { lazy, Suspense } from 'react';

const LazyUrlShortener = lazy(() => import('./UrlShortener'));

const UrlShortener = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUrlShortener {...props} />
  </Suspense>
);

export default UrlShortener;
