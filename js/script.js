console.log('JS OK!');

const timeInterval = 1;
let languageIndex = 1;

const helloLanguages = [
    '¡Hola', 'Ahoj', 'Alo', 'Annyeonghaseyo', 'Ave', 'Ciao', 'Cześć', 'Goeie môre', 'Hallå', 'Hallo', 'Halo', 'Hei', 'Hej', 'Hujambo', 'Konnichiwa', 'Kumusta', 'Marhabaan', 'Merhaba', 'Mingalaba', 'Namaskāra', 'Namasté', 'Nazdar', 'Nín hao', 'Olá', 'Privet', 'Pryvit', 'Salut', 'Shalóm', 'Sveiki', 'S̄wạs̄dī', 'Szia', 'Tālofa', 'Tungjatjeta', 'Xin chào', 'Zdravo', 'Γεια'
];


const app = new Vue({
    el: '#root',
    data: {
        message: helloLanguages[0],
        image: 'img/camera-thumb.jpg'
    },
    methods: {
        messageShow: function () {
            this.message = helloLanguages[languageIndex];
            languageIndex++;

            console.log(languageIndex);

            languageIndex === 36 ? languageIndex = 0 : '';

        }
    }
})


console.log({ helloLanguages });

setInterval(app.messageShow, timeInterval * 1000);


