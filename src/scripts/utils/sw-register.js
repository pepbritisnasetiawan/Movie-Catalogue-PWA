const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the brower');
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service Worker registerd');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
