/* Brief form: build a tidy email instead of the raw text/plain post.
   Without this script the form still opens the visitor's mail app. */
(function () {
  var form = document.getElementById('brief-form');
  if (!form) return;
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var brand = form.elements['Brand'].value.trim();
    var niche = form.elements['Niche'].value;
    var need = form.elements['Brief'].value.trim();
    var subject = 'Brief from ' + (brand || 'a brand') + ' (' + niche + ')';
    var body = 'Hi Darcy,\n\nBrand: ' + brand + '\nFor: ' + niche +
      '\n\nWhat we need:\n' + need + '\n';
    window.location.href = 'mailto:darcy0405ugc@gmail.com?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
})();

/* Clips: one real play button over each poster. Native controls appear once
   it plays. Without this script the videos keep their native controls. */
(function () {
  document.querySelectorAll('.clip video').forEach(function (video) {
    var wrap = document.createElement('div');
    wrap.className = 'vid';
    video.parentNode.insertBefore(wrap, video);
    wrap.appendChild(video);
    video.controls = false;
    var name = video.closest('.clip').querySelector('h4');
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'play';
    button.setAttribute('aria-label', 'Play the ' + (name ? name.textContent : '') + ' clip');
    wrap.appendChild(button);
    button.addEventListener('click', function () {
      document.querySelectorAll('.clip video').forEach(function (other) {
        if (other !== video) other.pause();
      });
      button.hidden = true;
      video.controls = true;
      var played = video.play();
      if (played && played.catch) played.catch(function () {});
    });
  });
})();
