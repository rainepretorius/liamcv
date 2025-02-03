var photos = ['minette1.jpeg', 'minette2.jpeg', 'minette3.jpeg', 'minette4.jpeg', 'minette5.jpeg', 'minette.jpg'];
var current_index = 0;

function update_photo() {
  const url = 'https://cdn1.pretoriusse.net/CDN/Images/minette/';
  if (current_index < photos.length) {
    let source = url + photos[current_index];
    document.getElementById('about-me-photo').src = source;
    current_index = current_index + 1;
  } else {
    current_index = 0;
  };
};

setInterval(update_photo, 3000);
