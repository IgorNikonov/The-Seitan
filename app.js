/* Universal functions */

// Light up the correct button
function lightUpButton(btnArray, state, e) {
    btnArray.forEach(btn => btn.classList.remove(state));
    e.target.classList.add(state);
}

// Load more photos
function loadMore(className) {
    AWImgArr.forEach(img => img.classList.remove(className));
}

/* Services */

const servicesBtnContainer = document.querySelector('.services-square-btn-container');

// Cards
const serviceCardCol = document.getElementsByClassName('service-container'),
      serviceCardArr = [...serviceCardCol];

// Buttons
const servicesButtonsCol = document.getElementsByClassName('services-square-btn'),
      servicesButtonsArr = [...servicesButtonsCol];

servicesButtonsArr[0].classList.add('pressed');


servicesBtnContainer.addEventListener('click', showTextAndImg);
function showTextAndImg(e) {
    if(e.target.classList.contains('services-square-btn')) {
        lightUpButton(servicesButtonsArr, 'pressed', e);

        serviceCardArr.forEach(card => card.classList.add('unvis'));
        serviceCardArr[e.target.id].classList.remove('unvis');
    }
}

/*Amazing Work*/

const amaizingWorkBtnContainer = document.querySelector('.amazing-work-square-btn-container');

// Buttons
const AWBtnCol = document.getElementsByClassName('amazing-work-square-btn'),
      AWBtnArr = [...AWBtnCol]; 

// Imgs
const AWImgCol = document.getElementsByClassName('amazing-work-img'),
      AWImgArr = [...AWImgCol];

amaizingWorkBtnContainer.addEventListener('click', filterImgs);
function filterImgs(e) {
    if(e.target.classList.contains('amazing-work-square-btn')) {
        lightUpButton(AWBtnArr, 'pushed', e);

        AWImgArr.forEach(img => img.classList.add('unvis'));
        AWImgArr.forEach(img => {
            if(img.classList.contains(AWBtnArr.indexOf(e.target))) {
                img.classList.remove('unvis');
            }
        });
    }
}

/* Load more */

const loadMoreBtn = document.querySelector('.amazing-work-btn');
const loadMoreBtn2 = document.querySelector('.amazing-work-btn2');

loadMoreBtn.addEventListener('click', (e) => {
    loadMore('unvis2');
    e.target.className = 'unvis';
    loadMoreBtn2.classList.remove('unvis');
});

loadMoreBtn2.addEventListener('click', (e) => {
    loadMore('unvis3');
    e.target.className = 'unvis';
});

/* Carousel */

const sliderTrigger = document.querySelector('.carousel-images-container');

const sliderImgsCol = document.getElementsByClassName('carousel-image'),
      sliderImgsArr = [...sliderImgsCol];

const contentCardsCol = document.getElementsByClassName('slider-item'),
      contentCardsArr = [...contentCardsCol];

sliderTrigger.addEventListener('click', triggerTheSlider);

let i = 0;

function triggerTheSlider(e) {
    if(e.target.classList.contains('carousel-image')) {
        i = sliderImgsArr.indexOf(e.target);
    } else if(e.target.classList.contains('next')) {
        i === 3 ? i = 0 : i++
    } else if(e.target.classList.contains('prev')) {
        i === 0 ? i = 3 : i--
    }

    contentCardsArr.forEach(card => card.classList.add('unvis'));
    contentCardsArr[i].classList.remove('unvis');

    sliderImgsArr.forEach(img => img.classList.remove('up'));
    sliderImgsArr[i].classList.add('up');
}