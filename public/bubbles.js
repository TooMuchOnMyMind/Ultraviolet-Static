function stopBubbles() {
    const container = document.getElementById('bubbles-container');
    if (container) {
      container.innerHTML = ''; // Remove all bubbles
      container.style.display = 'none'; // Hide the container
    }
  }
  
  // Example: stop bubbles when clicking on any sidebar link
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      stopBubbles();
    });
  });
  