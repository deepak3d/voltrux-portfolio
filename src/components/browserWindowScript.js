function fullScreenToggle(button) {
  const container = button.closest('.browser-container');
  if (!container) return;

  if (container.style.position !== 'fixed') {
    // Enter fullscreen
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.zIndex = '9999';
    container.style.margin = '0';
    container.style.borderRadius = '0';
  } else {
    // Exit fullscreen
    container.style.position = '';
    container.style.top = '';
    container.style.left = '';
    container.style.width = '';
    container.style.height = '';
    container.style.zIndex = '';
    container.style.margin = '';
    container.style.borderRadius = '';
  }
}

// Make function available globally
if (typeof window !== 'undefined') {
  window.fullScreenToggle = fullScreenToggle;
}