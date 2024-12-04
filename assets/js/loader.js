function loadHTMLComponent(url, elementId) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
  
  // Load header and footer
  loadHTMLComponent('header.html', 'header-placeholder');
  loadHTMLComponent('footer.html', 'footer-placeholder');
  