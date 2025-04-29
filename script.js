//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
// output.appendChild = btn;
output.innerHTML += "<div id='loading'>Loading Spinner..</div>"

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// let imagesHtml = "";

function downloadImage(url) {
	return new Promise((resolve, reject)=>{
		const img = new Image();
		img.src = url;

		img.onload = () => resolve(img);
		img.onerror = () => reject(`Failed to download image: ${url}`);
		
	})	
}


function downloadImages() {
	Promise.all(images.map(img=>downloadImage(img.url))).then((imgElements)=>{
		output.innerHTML = '';
		imgElements.forEach(img => output.appendChild(img));
		
	}).catch((e)=>{
		output.innerHTML = `<div id='error'>Error : ${e}</div>`
		// console.log(e)
	})
	
}

btn.addEventListener("click", downloadImages);
// ffffddffdfd1f