function downloadFile(filename) {
    var link = document.createElement('a');
      // set the download attribute to the filename
    link.setAttribute('download', filename);
      // set the href attribute to the path of the file
    link.setAttribute('href', 'assets/' + filename);
  
    // simulate a click on the link element to trigger the download
    link.click();
  }
  
  // call the downloadFile function with the name of the file to download
  downloadFile('example.pdf');