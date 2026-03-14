let Myimage=[
    "photo_1.png","photo_2.jpg",  "photo_3.jpg",  "photo_10.jpg",  "photo_5.jpg",  
    "photo_6.jpg" ,  "photo_7.jpg",  "photo_8.jpg",  "photo_9.jpg"
];
let gallery=document.getElementById('gallery');
Myimage.forEach((imagefile)=>{
let img=document.createElement("img");
img.src="image/" + imagefile;
img.alt="gallerimage";
gallery.appendChild(img);
});