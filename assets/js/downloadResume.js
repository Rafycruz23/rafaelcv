function downloadFile(RafaelCRUZ) {
    var link = document.createElement('a');
    link.setAttribute('download', RafaelCRUZ);
    link.setAttribute('href', 'images/' + RafaelCRUZ);
    link.setAttribute('type', 'application/pdf');
    link.style.display = 'none';

    if (window.navigator && window.navigator.userAgent.match(/(iPhone|iPad|Android)/)) {
    
      window.open(link.getAttribute('href'));
    } else {
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }