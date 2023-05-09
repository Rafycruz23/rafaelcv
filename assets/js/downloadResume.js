function downloadFile(RafaelCruzLC101) {
    var link = document.createElement('a');
      // set the download attribute to the filename
    link.setAttribute('download', RafaelCruzLC101);
      // set the href attribute to the path of the file
    link.setAttribute('href', 'images/' + RafaelCruzLC101);
  
    // simulate a click on the link element to trigger the download
    link.click();
  }
  
  // call the downloadFile function with the name of the file to download
//   downloadFile('RafaelCruzLC101.pdf');