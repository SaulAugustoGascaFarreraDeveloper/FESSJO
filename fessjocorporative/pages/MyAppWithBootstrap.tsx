import { Router } from 'next/router';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';

const DynamicBootstrapScript = dynamic(() => import('../componets/BootstrapScript'), {
  ssr: false,
});

interface MyAppWithBootstrapProps extends AppProps {
  router: Router;
}

function MyAppWithBootstrap({ Component, pageProps, router }: MyAppWithBootstrapProps) {
  useEffect(() => {
    // Aquí puedes agregar cualquier lógica adicional que necesites para inicializar tu aplicación
  }, []);

  return (
    <>
      <DynamicBootstrapScript />
      <Component {...pageProps} router={router} />
    </>
  );
}

export default MyAppWithBootstrap;

