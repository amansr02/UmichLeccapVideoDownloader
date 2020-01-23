fetch(url, {
	  method: 'GET',
	}).then(function(resp) {
	  console.log("request");
	  return resp.blob();
	}).then(function(blob) {
	   console.log("entered blob creation");
	   const newBlob = new Blob([blob], { type: "video/mp4", charset: "UTF-8" })

	  // IE doesn't allow using a blob object directly as link href
	  // instead it is necessary to use msSaveOrOpenBlob
	  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
		window.navigator.msSaveOrOpenBlob(newBlob);
		return;
	  }
	  const data = window.URL.createObjectURL(newBlob);
	  const link = document.createElement('a');
	  //link.dataType = "json";
	  link.href = data;
	  link.download = 'file.mp4';
	  link.dispatchEvent(new MouseEvent('click'));
	  console.log("click");
	  setTimeout(function () {
		// For Firefox it is necessary to delay revoking the ObjectURL
	   window.URL.revokeObjectURL(data), 60
	  });
});


