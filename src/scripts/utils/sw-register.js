import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('service worker not supported in the browser');
    return;
  }

  const wb = new WorkboxWindow.Workbox('/sw.bundle.js');

  try {
    await wb.register();
    console.log('service worker registered!!');
  } catch (error) {
    console.log('failed to registered service worker', error);
  }
};

export default swRegister;
