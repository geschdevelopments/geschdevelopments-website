(function () {
  document.querySelectorAll('[data-current-year]').forEach(function (node) { node.textContent = new Date().getFullYear(); });
  var toggle = document.querySelector('.menu-toggle'); var nav = document.querySelector('.site-nav');
  if (toggle && nav) { toggle.addEventListener('click', function () { var open = nav.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', String(open)); }); }
  var config = window.GESCH_CONFIG || {};
  document.querySelectorAll('[data-enquiry-form]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); var message = form.querySelector('[data-form-message]');
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (form.elements.website && form.elements.website.value) { return; }
      if (!config.FORM_ENDPOINT) { message.textContent = 'Online enquiries are being connected. Please check back shortly.'; return; }
      var button = form.querySelector('button[type="submit"]'); button.disabled = true; button.textContent = 'Sending…'; message.textContent = '';
      fetch(config.FORM_ENDPOINT, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (response) { if (!response.ok) throw new Error('Unable to submit'); form.reset(); message.textContent = 'Thank you. Your enquiry has been sent.'; })
        .catch(function () { message.textContent = 'We could not send your enquiry just now. Please try again shortly.'; })
        .finally(function () { button.disabled = false; button.textContent = 'Send my enquiry'; });
    });
  });
}());
