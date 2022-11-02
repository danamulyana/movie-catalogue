const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('service worker not supported in the browser');
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('service worker registered!!');
  } catch (error) {
    console.log('failed to registered service worker', error);
  }
};

export default swRegister;
