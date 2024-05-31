// Nav Bar 
document.addEventListener("DOMContentLoaded", function() {
    var lastScrollTop = 0;
    var delta = 5;
    var navbar = document.getElementById("navbar");
    var navbarHeight = navbar.offsetHeight;

    window.addEventListener("scroll", function() {
        var currentScroll = window.pageYOffset;

        if (Math.abs(lastScrollTop - currentScroll) <= delta)
            return;

        if (currentScroll > lastScrollTop && currentScroll > navbarHeight) {
        
            navbar.style.top = "-" + navbarHeight + "px";
            navbar.style.backgroundColor = "white"; 
        } else {
         
            navbar.style.top = "0";
            if (currentScroll === 0) {
                navbar.style.backgroundColor = "transparent";
            } else {
                navbar.style.backgroundColor = "white"; 
            }
        }

        lastScrollTop = currentScroll;
    });
});



//  Nav Search Button
document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggle-search");
  var searchBar = document.getElementById("search-bar");

  toggleButton.addEventListener("click", function () {
    if (searchBar.style.display === "none") {
      searchBar.style.display = "block";
    } else {
      searchBar.style.display = "none";
    }
  });
});

// Responsive Nav
const hamBtn = document.querySelector('.ham-btn');
const menu = document.getElementById('menu');

hamBtn.addEventListener('click', function() {
    const hamburgerIcon = hamBtn.querySelector('.fa-bars');
    const closeIcon = hamBtn.querySelector('[aria-label="close-icon"]');
    
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menu.style.display = 'none';
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});
  

function toggleCountrySelect() {
    var select = document.getElementById("header-country-select");
    if (select.style.display === "none") {
        select.style.display = "block";
    } else {
        select.style.display = "none";
    }
}



// First Section 
// First Section  
document.addEventListener("DOMContentLoaded", function() {
  const imageWrapper = document.querySelector(".image-wrapper");
  const images = document.querySelectorAll(".image-wrapper img");
  const imagesCount = images.length;
  let isDown = false;
  let startX;
  let scrollLeft;

  imageWrapper.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - imageWrapper.offsetLeft;
      scrollLeft = imageWrapper.scrollLeft;
  });

  imageWrapper.addEventListener("mouseleave", () => {
      isDown = false;
  });

  imageWrapper.addEventListener("mouseup", () => {
      isDown = false;
  });

  imageWrapper.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - imageWrapper.offsetLeft;
      const walk = (x - startX) * 2; 
      imageWrapper.scrollLeft = scrollLeft - walk;
      
      
      if (imageWrapper.scrollLeft >= imageWrapper.scrollWidth - imageWrapper.offsetWidth) {
          imageWrapper.scrollLeft = 0; 
      } else if (imageWrapper.scrollLeft <= 0) {
          imageWrapper.scrollLeft = imageWrapper.scrollWidth - imageWrapper.offsetWidth; 
      }
  });

  
  imageWrapper.addEventListener("mousemove", (e) => {
      const edgeScrollThreshold = 20; 
      const cursorX = e.clientX;
      const wrapperRect = imageWrapper.getBoundingClientRect();
      
      if (cursorX <= wrapperRect.left + edgeScrollThreshold) {
          imageWrapper.scrollLeft -= 10; 
      } else if (cursorX >= wrapperRect.right - edgeScrollThreshold) {
          imageWrapper.scrollLeft += 10; 
      }
  });
});


// Footer
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var svgs = document.querySelectorAll(".svg-logo");

var randomIndex = getRandomInt(0, svgs.length - 1);

var bgColors = [
  "#C7B9FF",
  "#F24E1E",
  "#42A5F5",
  "#4CAF50",
  "#FFC107",
  "#FF5722",
  "#9C27B0",
  "#FFEB3B",
];

document.getElementById("footer").style.backgroundColor = bgColors[randomIndex];

for (var i = 0; i < svgs.length; i++) {
  if (i !== randomIndex) {
    svgs[i].style.display = "none";
  }
}


// Scroll Up 
document.querySelector('.s-u-btn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});



// Footer Tape 
const tapeContainer = document.getElementById('tape-container');
const contentWidth = tapeContainer.scrollWidth;
const contentClone = tapeContainer.cloneNode(true);
tapeContainer.appendChild(contentClone);

tapeContainer.parentElement.style.overflow = 'hidden';

function moveContent() {
    let position = 0;
    const moveInterval = setInterval(() => {
        position--;
        tapeContainer.style.transform = `translateX(${position}px)`;
        if (position < -contentWidth) {
            position = 0;
        }
    }, 10); 
}
moveContent();

// msg / close 
document.addEventListener('DOMContentLoaded', function () {
    var messageButton = document.querySelector('.messenger-button-iframe-yyodx2');
    var msgIcon = document.querySelector('.msg-icon');
    var closeIcon = document.querySelector('.close-icon');

    messageButton.addEventListener('click', function () {
       
        if (msgIcon.style.display === 'none') {
            msgIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        } else {
            msgIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        }
    });
});


// pop up content 

document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.messenger-button-iframe-yyodx2');
    var popupContent = document.querySelector('.popup-content');

    button.addEventListener('click', function () {
    
        if (popupContent.style.display === 'none') {
            popupContent.style.display = 'block';
        } else {
            popupContent.style.display = 'none';
        }
    });
});

// Screen Saver 


function isScrollStopped(callback, timeout = 10000) {
    var scrollTimeout;
  
    window.addEventListener("scroll", function () {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(callback, timeout);
    });
  }
  
  function animateStickers() {
    var stickers = document.querySelectorAll(".sticker");
    var delayBetweenStickers = 1000;
    var delayBeforeRestart = 10000;
    var currentStickerIndex = 0;
    var isScrolling = false;
  
    function animateSticker(index) {
      if (!isScrolling && index < stickers.length) {
        setTimeout(function () {
          stickers[index].classList.add("visible");
          currentStickerIndex = index + 1;
          animateSticker(currentStickerIndex);
        }, delayBetweenStickers);
      } else {
        currentStickerIndex = 0;
        stickers.forEach(function (sticker) {
          sticker.classList.remove("visible");
        });
      }
    }
  
    animateSticker(currentStickerIndex);
  
    window.addEventListener("scroll", function () {
      isScrolling = true;
  
      stickers.forEach(function (sticker) {
        sticker.classList.remove("visible");
      });
  
      setTimeout(function () {
        isScrolling = false;
        animateSticker(currentStickerIndex);
      }, delayBeforeRestart);
    });
  }
  
  function initializeScreenSaver() {
    isScrollStopped(function () {
      animateStickers();
    });
  }
  
  initializeScreenSaver();
  
  






