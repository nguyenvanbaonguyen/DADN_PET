import React from 'react';

const Appear = ({condition, children}: any) => {
  if (!condition) return null;
  return <>{children}</>;
};

export default Appear;
