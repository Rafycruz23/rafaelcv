function downloadFile(RafaelCruzLC101) {
    var link = document.createElement('a');
    link.setAttribute('download', RafaelCruzLC101);
    link.setAttribute('href', 'images/' + RafaelCruzLC101);
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