function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('enterSite-move');
      }
    });
}
let distancePast = {threshold: [0.0]};
let elemObserver = new IntersectionObserver(onEntry, distancePast);
let myElement = document.querySelectorAll('.enterSite');
  
for (let elm of myElement) {
    elemObserver.observe(elm);
}


document.querySelector(".imgButtonOne").disabled = true;      //
document.querySelector(".imgButtonTwo").disabled = true;      //
setTimeout(function() {                                       // On entering the page images move for 2 second
  document.querySelector(".imgButtonOne").disabled = false;   // the button need to be disabled for this duration
  document.querySelector(".imgButtonTwo").disabled = false;   //
}, 2000);                                                     //

var imageCount = document.querySelector(".third-section > div").childElementCount;
var myMarginBigger = 20;
var myMarginSmaller = 50;

function imgMarginInit() {
  /*
  If images were shifted already their margin changes.
  Than if we resize under 576px the changed margin affects the positioning.

  This function, if we resize window, puts the images in default position.
  */
  for(let i=1; i<= imageCount; i++) {
    let fixMe = document.querySelector(".third-section > div > img:nth-child(" + i + ")");
    if (window.outerWidth < 576) {
      if(i == 1) {
        fixMe.style.marginLeft = " " + myMarginBigger + "vw";
      }
      if(i == 2) {
        fixMe.style.marginLeft = " " + (myMarginBigger+myMarginSmaller) + "vw";
      }
      if(i == 3) {
        fixMe.style.marginLeft = " " + (myMarginBigger+(myMarginSmaller*2)) + "vw";
      }
    }
    else
    {
      if(i == 1) {
        fixMe.style.marginLeft = " " + 0 + "vw";
      }
      if(i == 2) {
        fixMe.style.marginLeft = " " + myMarginBigger + "vw";
      }
      if(i == 3) {
        fixMe.style.marginLeft = " " + (myMarginBigger*2) + "vw";
      }
    }
  }
}
window.onresize = imgMarginInit;

function shift() {
  /*
  Function shift to move the images one position to the right.
  */
  document.querySelector(".imgButtonOne").disabled = true;    //
  document.querySelector(".imgButtonTwo").disabled = true;    //
                                                              //
  setTimeout(function() {                                     //  Buttons need to be disabled for duration of transition being completed. (2s)
    document.querySelector(".imgButtonOne").disabled = false; //  If enabled and clicked before transition done, it could take more images at once
    document.querySelector(".imgButtonTwo").disabled = false; //
  }, 2000); 
  for(let i=1; i<= imageCount; i++) {
    var myImage = document.querySelector(".third-section > div > img:nth-child(" + i + ")");
    var myImageStyle = getComputedStyle(myImage);                                           //
    var myImageLeftMargin = myImageStyle.marginLeft;                                        //
    var marginValue = parseInt(myImageLeftMargin);                                          // Getting margin as viewport
    var marginConverted = Math.floor(((100 * marginValue / window.outerWidth)+1) / 10) * 10;//
    
    if (window.outerWidth < 576) {
      if (marginConverted == myMarginBigger) {
        let takeMeDown = myImage;
        takeMeDown.classList.add("under");
        setTimeout(function() {
          takeMeDown.classList.remove("under");
        }, 1000); 
        myImage.style.marginLeft = " " + (myMarginBigger+(myMarginSmaller*2)) + "vw";
      }
      else if (marginConverted == (myMarginBigger+myMarginSmaller)) {
        myImage.style.marginLeft = " " + myMarginBigger + "vw";
      }
      else if(marginConverted == (myMarginBigger+(myMarginSmaller*2))) {
        myImage.style.marginLeft = " " + (myMarginBigger+myMarginSmaller) + "vw";
      }
    }

    else
    {
      if(marginConverted == 0) {
        let takeMeDown = myImage;
        takeMeDown.classList.add("under");
        setTimeout(function() {
          takeMeDown.classList.remove("under");
        }, 1000); 
        myImage.style.marginLeft = " " + (myMarginBigger * 2) + "vw";
      }
      else if(marginConverted == myMarginBigger) {
        myImage.style.marginLeft = " " + 0 + "vw";
      }
      else if(marginConverted == (myMarginBigger*2)) {
        myImage.style.marginLeft = " " + (myMarginBigger) + "vw";
      }
    }
  }
}