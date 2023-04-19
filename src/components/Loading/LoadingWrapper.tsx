import React from 'react';
import Loading from './Loading';

const LoadingWrapper = ({condition, children}: any) => {
  if (!condition) return <Loading />;
  return <>{children}</>;
};

export default LoadingWrapper;
