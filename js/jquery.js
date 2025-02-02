'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () {
  modal.classList.add('closed');
  // Simpan status modal ke localStorage
  localStorage.setItem('modalStatus', 'closed');
};

// modal event listener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
  // Simpan status toast ke localStorage
  localStorage.setItem('toastStatus', 'closed');
});

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');

// jQuery usage examples
$(document).ready(function () {
  // Handle modal close with jQuery
  $('[data-modal-close], [data-modal-overlay]').on('click', function () {
    $('[data-modal]').addClass('closed');
    // Simpan status modal ke localStorage
    localStorage.setItem('modalStatus', 'closed');
  });

  // Handle toast notification close with jQuery
  $('[data-toast-close]').on('click', function () {
    $('[data-toast]').addClass('closed');
    // Simpan status toast ke localStorage
    localStorage.setItem('toastStatus', 'closed');
  });

  // Handle mobile menu toggle
  $('[data-mobile-menu-open-btn]').on('click', function () {
    $('[data-mobile-menu]').slideToggle(); // Toggles the visibility with animation
  });

  // Periksa status modal di localStorage
  if (localStorage.getItem('modalStatus') === 'closed') {
    $('[data-modal]').addClass('closed');
  }

  // Periksa status toast di localStorage
  if (localStorage.getItem('toastStatus') === 'closed') {
    $('[data-toast]').addClass('closed');
  }

  // Periksa status menu mobile di localStorage (opsional)
  const menuStatus = localStorage.getItem('mobileMenuStatus');
  if (menuStatus === 'open') {
    $('[data-mobile-menu]').show();
  } else if (menuStatus === 'closed') {
    $('[data-mobile-menu]').hide();
  }

  // Simpan status menu mobile saat toggle
  $('[data-mobile-menu-open-btn]').on('click', function () {
    const isVisible = $('[data-mobile-menu]').is(':visible');
    localStorage.setItem('mobileMenuStatus', isVisible ? 'closed' : 'open');
  });
});

