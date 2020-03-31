let slideshow = {
    photoList: ["dog", "cat", "fish", "bird", "pig", "cow"],
    currentPhotoIndex: 0,
    nextPhoto: function() {
        if(this.currentPhotoIndex == (this.photoList.length -1)) {
            console.log("End of slideshow");
        } else {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
        };
    },
    prevPhoto: function() {
        if(this.currentPhotoIndex == 0) {
            console.log("End of slideshow");
        } else {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        };
    },
    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];
    }
};

console.log(slideshow.getCurrentPhoto());
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.prevPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();