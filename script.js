
/*
  НАСТРОЙКИ САЙТА

  1. Вставьте ссылку на Instagram в INSTAGRAM_URL.
  2. Положите фотографию Елизаветы в assets/elizabeth.jpg.
  3. Тексты разделов можно менять прямо в index.html.
*/

const INSTAGRAM_URL = ''; 
// Например: https://www.instagram.com/username/

const toast = document.getElementById('toast');

let toastTimer;

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  window.clearTimeout(toastTimer);

  toastTimer = window.setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

function setupInstagramLink(id) {
  const link = document.getElementById(id);

  if (!link) return;

  if (INSTAGRAM_URL.trim()) {
    link.href = INSTAGRAM_URL.trim();
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.href = '#instagram';

    link.addEventListener('click', (event) => {
      event.preventDefault();

      showToast(
        'Добавьте ссылку на Instagram в файле script.js'
      );
    });
  }
}

setupInstagramLink('instagram-link');
setupInstagramLink('instagram-cta');
