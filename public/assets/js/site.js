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
