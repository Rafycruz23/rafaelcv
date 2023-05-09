function downloadFile(RafaelCruzLC101) {
    var link = document.createElement('a');
      // set the download attribute to the filename
    link.setAttribute('download', RafaelCruzLC101);
      // set the href attribute to the path of the file
    link.setAttribute('href', 'images/' + RafaelCruzLC101);
    link.style.display = 'none';

    if (window.navigator && window.navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
      // if user is on a mobile device, use window.open to trigger the download
      window.open(link.getAttribute('href'));
    } else {
      // if user is not on a mobile device, add the link element to the DOM and simulate a click on it
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  
  // call the downloadFile function with the name of the file to download
//   downloadFile('RafaelCruzLC101.pdf');