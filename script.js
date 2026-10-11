// Set the real Viber number in international format, e.g. +380XXXXXXXXX.
const VIBER_PHONE = "+380673277076";
const validPhone = /^\+[1-9]\d{7,14}$/.test(VIBER_PHONE);
document.querySelectorAll('.viber').forEach(link => {
  if (validPhone) link.href = `viber://chat?number=${encodeURIComponent(VIBER_PHONE)}`;
  else link.addEventListener('click', () => {
    document.getElementById('contact-status').textContent = 'Демо сайту: контакт Viber буде доступний після додавання номера власника.';
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
