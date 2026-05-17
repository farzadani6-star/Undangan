const targetDate = new Date("December 12, 2026 08:00:00").getTime();

setInterval(() => {

  const now = new Date().getTime();

  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
  );

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

},1000);

// OPEN BUTTON



// LOCK SCROLL SAAT OPENING

document.body.classList.add("lock-scroll");

const openBtn =
document.getElementById("openInvitation");

const openingScreen =
document.getElementById("openingScreen");

openBtn.addEventListener("click", () => {

  /* HILANGKAN OPENING */

  openingScreen.classList.add("hide-opening");

  /* BUKA SCROLL */

  document.body.classList.remove("lock-scroll");

});

const music =
document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {

  /* PLAY MUSIC */

  music.play();

});



const hiddenItems =
document.querySelectorAll(".hidden-item");

openBtn.addEventListener("click", () => {

  openingScreen.classList.add("hide-opening");

  /* DELAY HALUS */

  setTimeout(() => {

    hiddenItems.forEach((item,index) => {

      setTimeout(() => {

        item.classList.add("show");

      }, index * 550);

    });

  },600);

});
// AUTO GUEST NAME

// =========================
// GUEST NAME FROM URL
// =========================

const guestName =
document.getElementById("guestName");

/* AMBIL PARAMETER URL */

const urlParams =
new URLSearchParams(
  window.location.search
);

const to =
urlParams.get("to");

/* TAMPILKAN */

if(to){

  guestName.innerHTML =
  decodeURIComponent(to);

}

// =========================
// RSVP GOOGLE SHEET
// =========================

const form =
document.getElementById(
  "rsvpForm"
);

const successMessage =
document.getElementById(
  "successMessage"
);

const wishList =
document.getElementById(
  "wishList"
);

// =========================
// SUBMIT RSVP
// =========================

form.addEventListener(
"submit",
async(e)=>{

  e.preventDefault();

  // =========================
  // DATA
  // =========================

  const data = {

    nama:
    document.getElementById(
      "nama"
    ).value,

    kehadiran:
    document.getElementById(
      "kehadiran"
    ).value,

    ucapan:
    document.getElementById(
      "ucapan"
    ).value

  };

  try{

    // =========================
    // SEND TO SHEET
    // =========================

    await fetch(

      "https://script.google.com/macros/s/AKfycbwA3awn0dip6o36kAnG5jBEmRmxI1IFViJO-pkvGx6poLrKmuO9MR5y0MndrTzbLR88/exec",

      {

        method:"POST",

        mode:"no-cors",

        headers:{

          "Content-Type":
          "application/json"

        },

        body:
        JSON.stringify(data)

      }

    );

    // =========================
    // SHOW SUCCESS
    // =========================

    successMessage.classList.add(
      "show"
    );

    // =========================
    // SHOW WISH CARD
    // =========================

    wishList.innerHTML += `

      <div class="wish-card reveal-item show">

        <h4 class="wish-name">
          ${data.nama}
        </h4>

        <p class="wish-text">
          ${data.ucapan}
        </p>

      </div>

    `;

    // =========================
    // RESET FORM
    // =========================

    form.reset();

    // =========================
    // HIDE SUCCESS
    // =========================

    setTimeout(() => {

      successMessage.classList.remove(
        "show"
      );

    },3000);

  }

  catch(error){

    console.log(error);

    alert(
      "Gagal mengirim RSVP "
    );

  }

});


const sparkles =
document.querySelector(".sparkles");

for(let i = 0; i < 50; i++){

  const sparkle =
  document.createElement("span");

  const size =
  Math.random() * 4 + 2;

  sparkle.style.width =
  size + "px";

  sparkle.style.height =
  size + "px";

  sparkle.style.left =
  Math.random() * 100 + "%";

  sparkle.style.top =
  Math.random() * 100 + "%";

  sparkle.style.animationDuration =
  (3 + Math.random() * 5) + "s";

  sparkle.style.animationDelay =
  Math.random() * 5 + "s";

  sparkles.appendChild(sparkle);

}

// REVEAL ANIMATION

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach(reveal => {

    const windowHeight =
    window.innerHeight;

    const revealTop =
    reveal.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      reveal.classList.add("active");

    }

  });

});

// GALLERY SLIDER

const track =
document.querySelector(".gallery-track");

const images =
document.querySelectorAll(".gallery-track img");



let index = 0;

function updateSlider(){

  track.style.transform =
  `translateX(-${index * 100}%)`;

}


// AUTO SLIDE

setInterval(() => {

  index++;

  if(index >= images.length){

    index = 0;

  }

  updateSlider();

},5000);

// IMAGE MODAL

const galleryImages =
document.querySelectorAll(".gallery-item img");

const imageModal =
document.getElementById("imageModal");

const modalImg =
document.getElementById("modalImg");

const closeModal =
document.querySelector(".close-modal");

/* OPEN */

galleryImages.forEach(img => {

  img.addEventListener("click", () => {

    imageModal.classList.add("show");

    modalImg.src = img.src;

  });

});

/* CLOSE BUTTON */

closeModal.addEventListener("click", () => {

  imageModal.classList.remove("show");

});

/* CLOSE OUTSIDE */

imageModal.addEventListener("click", (e) => {

  if(e.target === imageModal){

    imageModal.classList.remove("show");

  }

});

// REVEAL ON SCROLL

const revealItems =
document.querySelectorAll(".reveal-item");

function revealOnScroll(){

  revealItems.forEach((item,index) => {

    const windowHeight =
    window.innerHeight;

    const itemTop =
    item.getBoundingClientRect().top;

    if(itemTop < windowHeight - 80){

      setTimeout(() => {

        item.classList.add("show");

      }, index * 120);

    }

  });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

// SAVE THE DATE

const saveButtons =
document.querySelectorAll(".save-date-btn");

saveButtons.forEach(btn => {

  btn.addEventListener("click", () => {

    const title =
    "Wedding Ahmad & Aisyah";

    const startDate =
    "20261212T080000";

    const endDate =
    "20261212T120000";

    const location =
    "Gedung Islamic Center";

    const details =
    "Wedding Invitation Ahmad & Aisyah";

    const googleCalendarUrl =
    `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

    window.open(
      googleCalendarUrl,
      "_blank"
    );

  });

});

// COPY REKENING

const copyButtons =
document.querySelectorAll(".copy-btn");

copyButtons.forEach(btn => {

  btn.addEventListener("click", () => {

    const rekening =
    btn.dataset.copy;

    navigator.clipboard.writeText(
      rekening
    );

    btn.innerHTML =
    "✅ Tersalin";

    setTimeout(() => {

      btn.innerHTML =
      "📋 Salin Rekening";

    },2000);

  });

});

// =========================
// ACTIVE NAVBAR
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
    section.offsetTop - 200;

    const sectionHeight =
    section.clientHeight;

    if(pageYOffset >= sectionTop){

      current =
      section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(
      link.getAttribute("href")
      === `#${current}`
    ){

      link.classList.add("active");

    }

  });

});

// =========================
// HIDE NAV ON SCROLL
// =========================

const bottomNav =
document.querySelector(".bottom-nav");

let lastScroll = 0;

window.addEventListener("scroll", () => {

  const currentScroll =
  window.pageYOffset;

  /* SCROLL KE BAWAH */

  if(currentScroll > lastScroll
  && currentScroll > 100){

    bottomNav.classList.add(
      "nav-hide"
    );

  }

  /* SCROLL KE ATAS */

  else{

    bottomNav.classList.remove(
      "nav-hide"
    );

  }

  lastScroll = currentScroll;

});



// =========================
// VINYL MUSIC CONTROL
// =========================

const vinylBtn =
document.querySelector(".vinyl-btn");

vinylBtn.addEventListener("click",(e)=>{

  e.preventDefault();

  if(music.paused){

    music.play();

    vinylBtn.classList.remove(
      "paused"
    );

  }else{

    music.pause();

    vinylBtn.classList.add(
      "paused"
    );

  }

});

// =========================
// ACTIVE SECTION EFFECT
// =========================

const allSections =
document.querySelectorAll("section");

function activeSection(){

  const trigger =
  window.innerHeight / 1.3;

  allSections.forEach(section => {

    const top =
    section.getBoundingClientRect().top;

    const bottom =
    section.getBoundingClientRect().bottom;

    if(
      top < trigger &&
      bottom > 150
    ){

      section.classList.add(
        "active-section"
      );

    }else{

      section.classList.remove(
        "active-section"
      );

    }

  });

}

window.addEventListener(
"scroll",
activeSection
);

activeSection();