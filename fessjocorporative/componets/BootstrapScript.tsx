import { useEffect } from 'react';

function BootstrapScript() {
  useEffect(() => {
    const importBootstrap = async () => {
      await import('bootstrap/dist/js/bootstrap.bundle.min.js');
      // Aquí puedes realizar cualquier lógica adicional después de cargar el script de Bootstrap
    };

    importBootstrap();
  }, []);

  return null;
}

export default BootstrapScript;
