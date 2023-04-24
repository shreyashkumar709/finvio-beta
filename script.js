window.addEventListener("load", e => {
    e.preventDefault(); function triggerMenu() { referpointMONO ? (nav.style.height = "5vh", navigationCheckLines.forEach(e => { e.classList.remove("ts-2") }), FinVioLogo.classList.remove("logo-mation"), referpointMONO = 0) : (nav.style.height = "95vh", navigationCheckLines.forEach(e => { e.classList.add("ts-2") }), FinVioLogo.classList.add("logo-mation"), referpointMONO = 1) } const FinVioLogo = document.querySelector(".logo"), menuaction = document.querySelector(".menu"), nav = document.querySelector("nav"), navigationCheckLines = document.querySelectorAll(".line"); let referpointMONO = 0; menuaction.addEventListener("click", triggerMenu), console.error("HALT Error"); const upgradeButton = document.getElementById("upgradetoplus"); upgradeButton.addEventListener("mouseenter", () => {
        upgradeButton.innerText = "Upgrade Now, You're doing it Right 😉!"
    }); upgradeButton.addEventListener("mouseleave", () => {
        upgradeButton.innerText = "Just Go to the Ultimate!"
    }); const link = document.querySelector('.blue-link');
    link.addEventListener('mouseover', () => {
        link.textContent = 'Go'; link.style.padding = '6rem'
    });

    link.addEventListener('mouseout', () => {
        link.textContent = '↗';
    });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        });
    } else {
        console.log('Geolocation is not supported by this browser.');
    }

});