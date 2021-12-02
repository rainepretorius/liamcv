async function registerSW() { 
  if ('serviceWorker' in navigator) { 
    try {
      await navigator.serviceWorker.register('https://liam.pretoriusse.net/sw.js'); 
    } catch (e) {
      console.error(e);
    }
  } else {
    document.querySelector('.alert').removeAttribute('hidden'); 
  }
}

window.addEventListener('load', e => {
  registerSW(); 
});

