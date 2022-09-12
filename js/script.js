console.log('JS OK!');

const timeInterval = 1;
let languageIndex = 1;


// Imported flags from bandiere-mondo.it
const languageFlags = [
    'es', 'sk', 'ro', 'kr', 'it', 'pl', 'za', 'se', 'no', 'nl', 'de', 'id', 'fi', 'dk', 'sz', 'jp', 'ph', 'sa', 'tr', 'mm', 'bd', 'in', 'cz', 'cn', 'pt', 'ru', 'ua', 'fr', 'il', 'lv', 'th', 'hu', 'ws', 'al', 'vn', 'hr', 'rs', 'si', 'gr'
];

const helloLanguages = [
    '¡Hola', 'Ahoj', 'Alo', 'Annyeonghaseyo', 'Ciao', 'Cześć', 'Goeie môre', 'Hallå', 'Hallo', 'Halo', 'Hei', 'Hej', 'Hujambo', 'Konnichiwa', 'Kumusta', 'Marhabaan', 'Merhaba', 'Mingalaba', 'Namaskāra', 'Namasté', 'Nazdar', 'Nín hao', 'Olá', 'Privet', 'Pryvit', 'Salut', 'Shalóm', 'Sveiki', 'S̄wạs̄dī', 'Szia', 'Tālofa', 'Tungjatjeta', 'Xin chào', 'Zdravo', 'Γεια'
];


const app = new Vue({
    el: '#root',
    data: {
        message: helloLanguages[0],
        image: `https://flagcdn.com/16x12/${languageFlags[0]}.png`,
        imageSrcSet: `https://flagcdn.com/32x24/${languageFlags[0]}.png 2x,
        https://flagcdn.com/48x36/${languageFlags[0]}.png 3x`
    },
    methods: {
        messageShow: function () {
            this.message = helloLanguages[languageIndex];
            this.image = `https://flagcdn.com/16x12/${languageFlags[languageIndex]}.png`;
            this.imageSrcSet = `https://flagcdn.com/32x24/${languageFlags[languageIndex]}.png 2x,
            https://flagcdn.com/48x36/${languageFlags[languageIndex]}.png 3x`;

            languageIndex++;

            console.log(languageIndex);

            languageIndex === helloLanguages.length ? languageIndex = 0 : '';

        }
    }
})


console.log({ helloLanguages });

setInterval(app.messageShow, timeInterval * 1000);


