var models = [
    {
        name: 'Bmw 418d',
        image: 'img/bmw.jpg',
        link: 'https://www.sahibinden.com/bmw'
    },
    {
        name: 'Honda Civic',
        image: 'img/honda.jpg',
        link: 'https://www.sahibinden.com/honda'
    },
    {
        name: 'Mazda X',
        image: 'img/mazda.jpg',
        link: 'https://www.sahibinden.com/mazda'
    },
    {
        name: 'Skoda Yal',
        image: 'img/skoda.jpg',
        link: 'https://www.sahibinden.com/skoda'
    },
    {
        name: 'Volvo T',
        image: 'img/volvo.jpg',
        link: 'https://www.sahibinden.com/volvo'
    }
];

var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
    duration: '1000',
    random: false
};

init(settings);

document.querySelector('.iconLeft').addEventListener
    ('click', function () {
        index--;
        showSlide(index);
        console.log(index);
    });
document.querySelector('.iconRight').addEventListener
    ('click', function () {
        index++;
        showSlide(index);
        console.log(index);
    });

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    })
});
document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        init(settings);
    })
});


function init(settings) {
    var prev;
    interval = setInterval(function () {

        if (settings.random) {
            //random index kısmı
            do {
                index = Math.floor(Math.random * slaytCount)
            } while (index == prev)
            prev == index;
        }
        else {
            //artan index kısmı
            if (slaytCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    }, settings.duration)



}


function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}










