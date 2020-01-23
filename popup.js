//prepare loading for video downloading
document.getElementById("Download").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");
    chrome.tabs.executeScript({
        code: 'document.querySelector("#layout > div > div.content.clearfix > div.content-inner > div > div.video > video").getAttribute("src");' 
    }, (results) => {
   		var url = results[0];
		url = url.slice(2);
		url = "https://"+url;
		console.log(url);
		chrome.tabs.executeScript({
			code : "const url ="+ JSON.stringify(url) + ";"
		}, function(){
			chrome.tabs.executeScript({
				file: 'content.js'
			});
		});
	});
});
document.getElementById("link").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");
    chrome.tabs.executeScript({
        code: 'document.querySelector("#layout > div > div.content.clearfix > div.content-inner > div > div.video > video").getAttribute("src");' 
    }, (results) => {
   		var link = results[0];
		link = link.slice(2);
		link = "http://"+link;
		console.log(link);
	   function copyStringToClipboard (str) {
		   var el = document.createElement('textarea');
		   el.value = str;
		   el.setAttribute('readonly', '');
		   el.style = {position: 'absolute', left: '-9999px'};
		   document.body.appendChild(el);
		   el.select();
		   document.execCommand('copy');
		   document.body.removeChild(el);
	   }
	   copyStringToClipboard(link);
	});
});
//prepare tutorial webpage for how to use the UMICH leccap video downloader.
document.getElementById("tutorial").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");
	chrome.tabs.create({ url: "/tutorial.html" });
});

