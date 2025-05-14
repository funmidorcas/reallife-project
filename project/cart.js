const backgroundImages = [
    'asset/shoe4.jpg',
    'asset/shoe5.jpg',
    'asset/shoe2.jpg',
    'asset/shoe1.jpg'
];

let currentImageIndex = 0;

document.getElementById('change-background-right').addEventListener('click', function() {
    const container = document.getElementById('background-container');
    
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    
    container.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
});

document.getElementById('change-background-left').addEventListener('click', function() {
    const container = document.getElementById('background-container');
    
    currentImageIndex = (currentImageIndex - 1 + backgroundImages.length) % backgroundImages.length;
    
    container.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
});



document.getElementById('top').addEventListener('click', function() {
    let topValue = document.getElementById('top').innerText; 
    document.getElementById('result').innerText = topValue;
});

window.addEventListener('DOMContentLoaded', function() {
    let offerTimeElements = document.querySelectorAll('.offer-div .offer-time');

    function startCountdown() {
        let countdownDate = new Date().getTime() + (30 * 24 * 60 * 60 * 1000); 

        let interval = setInterval(function() {
            let now = new Date().getTime();
            let distance = countdownDate - now;

            if (distance < 0) {
                clearInterval(interval);
                offerTimeElements.forEach(element => {
                    element.innerText = "Offer Expired";
                });
            } else {
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                offerTimeElements[0].querySelector('.offer-span').innerText = days;
                offerTimeElements[1].querySelector('.offer-span').innerText = hours;
                offerTimeElements[2].querySelector('.offer-span').innerText = minutes;
                offerTimeElements[3].querySelector('.offer-span').innerText = seconds;
            }
        }, 1000);
    }

    startCountdown();
});

document.querySelectorAll('.img-name').forEach(item => {
    item.addEventListener('click', function() {
        item.classList.toggle('selected');
    });
});

document.getElementById('payment').addEventListener('click', function() {
    let resultValue = document.getElementById('result').innerText;

    sessionStorage.setItem('resultValue', resultValue); 

    window.location.href = "payment.html";
});


document.getElementById('top').addEventListener('click', function() {
    let topValue = document.getElementById('top').innerText; 
    document.getElementById('result').innerText = topValue; 
});

let resultValue = 0; 

document.getElementById('minus').addEventListener('click', function() {
    if (resultValue > 0) { 
        resultValue--; 
        document.getElementById('result').innerText = resultValue; 
        document.getElementById('top').innerText = resultValue; 
    }
});

document.getElementById('plus').addEventListener('click', function() {
    resultValue++; 
    document.getElementById('result').innerText = resultValue; 
    document.getElementById('top').innerText = resultValue; 
});

document.getElementById('payment').addEventListener('click', function() {
    let resultValue = document.getElementById('result').innerText;

    sessionStorage.setItem('resultValue', resultValue); 

    window.location.href = "payment.html";
});

document.getElementById('payment').addEventListener('click', function() {
    let resultValue = document.getElementById('result').innerText;

    sessionStorage.setItem('resultValue', resultValue); 

    window.location.href = "payment.html";
});
