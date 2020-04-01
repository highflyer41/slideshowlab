let slideshow = {
    photoList: ["dog", "cat", "fish", "bird", "pig", "cow"],
    currentPhotoIndex: 0,
    nextPhoto: function() {
        if(this.currentPhotoIndex == (this.photoList.length -1)) {
            this.pause();
            console.log("End of slideshow");
        } else {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
        };
    },
    prevPhoto: function() {
        if(this.currentPhotoIndex == 0) {
            this.pause();
            console.log("End of slideshow");
        } else {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        };
    },
    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];
    },
    playInterval: null,
    play: function() {
        playInterval = setInterval(()=>{this.nextPhoto()}, 1000);
    },
    pause: function() {
        clearInterval(playInterval);
    }
};

console.log(slideshow.getCurrentPhoto());
slideshow.play();