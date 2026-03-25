import * as React from 'react';
import Helmet from 'react-helmet';

export default function RhaiCodeDemoPage() {
  return (
    <>
      <Helmet>
        <title>RHAI Code Demos</title>
      </Helmet>
      <iframe
        style={{ height: '100vh', width: '100%', border: 'none' }}
        src="https://eformat.github.io/rhai-code-demo/"
      />
    </>
  );
}
