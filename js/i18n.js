/* =========================================================
   i18n.js — English / Russian / Kyrgyz
   -----------------------------------------------------------------
   Add or edit copy here. Every key maps to the data-i18n="key"
   attributes in index.html. The chosen language is remembered in
   the browser. NOTE: the Russian and Kyrgyz copy was written
   carefully but should be proofread by a native speaker before
   going live — especially the Kyrgyz.
   ========================================================= */

const I18N = {
  en: {
    "meta.title": "Chychkan · Mountain Retreat in the Chychkan Gorge",
    "meta.description": "Chychkan — a family-run mountain retreat in the Chychkan Gorge, Talas Province, Kyrgyzstan. Reserve your room.",

    "nav.about": "About", "nav.rooms": "Rooms", "nav.experiences": "Experiences",
    "nav.gallery": "Gallery", "nav.contact": "Contact", "nav.reserve": "Reserve",

    "hero.kicker": "Chychkan Gorge · Talas, Kyrgyzstan",
    "hero.title": "A quiet place in the mountains",
    "hero.subtitle": "A family-run retreat beside the river, deep in the spruce forests of the Chychkan Gorge.",
    "hero.ctaReserve": "Reserve a room", "hero.ctaExplore": "Explore",
    "hero.stat1": "Altitude", "hero.stat2": "Summer days", "hero.stat3": "Family-run since",

    "about.kicker": "Our story",
    "about.title": "A quiet place that has been in our family for three generations",
    "about.p1": "Chychkan sits where the road meets the river, in a narrow green gorge of the Talas mountains. We grew up here. Today we welcome travellers the same way our grandparents did — with warm food, clean rooms, and the sound of the river through an open window.",
    "about.p2": "There is no rush here. People come to walk, to fish, to sit by the fire, and to breathe air that is genuinely cold and clean. We keep things simple so you can rest.",
    "about.f1Title": "Pure mountain air", "about.f1Desc": "Cool, clean alpine air at 1,800 metres — even in midsummer.",
    "about.f2Title": "Fresh trout & home cooking", "about.f2Desc": "Trout from the river and bread from our own kitchen, every day.",
    "about.f3Title": "Quiet & remote", "about.f3Desc": "No crowds, no noise — only spruce forest, water, and stars.",

    "rooms.kicker": "Stay with us", "rooms.title": "Rooms & cabins",
    "rooms.subtitle": "Simple, warm, and clean. Every room looks out on the forest or the river.",
    "rooms.perNight": "/ night", "rooms.upTo": "Up to {n} guests", "rooms.reserve": "Reserve",
    "rooms.som": "som", "rooms.available": "Available",

    "reserve.kicker": "Reservation", "reserve.title": "Reserve your stay",
    "reserve.subtitle": "It takes one minute. We will call you back to confirm — no payment online.",
    "reserve.stepDates": "Dates", "reserve.stepRoom": "Room", "reserve.stepDetails": "Details", "reserve.stepDone": "Done",
    "reserve.s1Title": "When are you coming?",
    "reserve.checkIn": "Check-in", "reserve.checkOut": "Check-out", "reserve.guests": "Guests",
    "reserve.checkBtn": "Find available rooms",
    "reserve.s2Title": "Choose your room",
    "reserve.noRooms": "Sorry, no rooms are free for those dates. Please try different dates or call us.",
    "reserve.nights": "{n} nights", "reserve.night": "1 night",
    "reserve.choose": "Choose", "reserve.total": "total", "reserve.back": "← Back",
    "reserve.s3Title": "Your details",
    "reserve.name": "Full name", "reserve.phone": "Phone number", "reserve.email": "Email",
    "reserve.optional": "(optional)", "reserve.notes": "Anything we should know?",
    "reserve.notesPh": "Arrival time, children, dietary needs...",
    "reserve.confirmBtn": "Confirm reservation",
    "reserve.s4Title": "Reservation received!",
    "reserve.s4Msg": "Thank you. We will call you shortly to confirm your stay.",
    "reserve.reference": "Reference", "reserve.another": "Make another reservation",
    "reserve.errDates": "Please choose both dates.",
    "reserve.errOrder": "Check-out must be after check-in.",
    "reserve.errPast": "Those dates are in the past.",
    "reserve.errName": "Please enter your name.",
    "reserve.errPhone": "Please enter a phone number so we can confirm.",
    "reserve.sumGuest": "Guest", "reserve.sumRoom": "Room", "reserve.sumDates": "Dates",
    "reserve.sumGuests": "Guests", "reserve.sumTotal": "Total",

    "exp.kicker": "Things to do", "exp.title": "Days worth slowing down for",
    "exp.e1Title": "Mountain hikes", "exp.e1Desc": "Trails along the gorge, from gentle riverside walks to alpine ridges.",
    "exp.e2Title": "Trout fishing", "exp.e2Desc": "Fish the cold river and we will cook your catch for dinner.",
    "exp.e3Title": "Evening campfire", "exp.e3Desc": "Tea, stories and a sky full of stars once the sun drops behind the ridge.",
    "exp.e4Title": "Horseback riding", "exp.e4Desc": "Ride into the high pastures with a local guide who knows every path.",
    "exp.e5Title": "Banya & rest", "exp.e5Desc": "A wood-fired banya by the water — the best way to end a cold day.",
    "exp.e6Title": "Local food", "exp.e6Desc": "Honey, fresh bread, beshbarmak and tea — all made here, all home-grown.",

    "gallery.kicker": "A look around", "gallery.title": "The gorge, in pictures",
    "gallery.subtitle": "Replace these with your own photos — the layout adapts automatically.",
    "gallery.hint": "Your photo",

    "contact.kicker": "Find us", "contact.title": "Come and stay",
    "contact.lead": "The easiest way to reach us is by phone or WhatsApp. We answer in Kyrgyz, Russian and English.",
    "contact.address": "Address", "contact.addressValue": "Chychkan Gorge, Talas Province, Kyrgyzstan",
    "contact.phone": "Phone", "contact.email": "Email",
    "contact.hours": "Open", "contact.hoursValue": "All year · reception 8:00–22:00",
    "contact.whatsapp": "Message on WhatsApp", "contact.reserve": "Reserve a room",
    "contact.mapHint": "Map embed goes here",

    "footer.tagline": "A family-run mountain retreat in the Chychkan Gorge.",
    "footer.rights": "© 2026 Chychkan. Made with care."
  },

  ru: {
    "meta.title": "Чычкан · Горный отдых в Чычканском ущелье",
    "meta.description": "Чычкан — семейный горный отдых в Чычканском ущелье, Таласская область, Кыргызстан. Забронируйте номер.",

    "nav.about": "О нас", "nav.rooms": "Номера", "nav.experiences": "Отдых",
    "nav.gallery": "Галерея", "nav.contact": "Контакты", "nav.reserve": "Бронировать",

    "hero.kicker": "Чычканское ущелье · Талас, Кыргызстан",
    "hero.title": "Тихое место в горах",
    "hero.subtitle": "Семейный отдых у реки, в глубине еловых лесов Чычканского ущелья.",
    "hero.ctaReserve": "Забронировать номер", "hero.ctaExplore": "Подробнее",
    "hero.stat1": "Высота", "hero.stat2": "Летом днём", "hero.stat3": "Семейное дело с",

    "about.kicker": "Наша история",
    "about.title": "Тихое место, которое уже три поколения принадлежит нашей семье",
    "about.p1": "Чычкан расположен там, где дорога встречается с рекой, в узком зелёном ущелье Таласских гор. Мы выросли здесь. Сегодня мы встречаем гостей так же, как это делали наши бабушки и дедушки — горячей едой, чистыми комнатами и шумом реки за открытым окном.",
    "about.p2": "Здесь некуда спешить. Люди приезжают, чтобы гулять, рыбачить, сидеть у огня и дышать по-настоящему холодным и чистым воздухом. Мы держим всё простым, чтобы вы могли отдохнуть.",
    "about.f1Title": "Чистый горный воздух", "about.f1Desc": "Прохладный, чистый воздух на высоте 1800 метров — даже в разгар лета.",
    "about.f2Title": "Свежая форель и домашняя еда", "about.f2Desc": "Форель из реки и хлеб из нашей кухни — каждый день.",
    "about.f3Title": "Тишина и уединение", "about.f3Desc": "Ни толпы, ни шума — только еловый лес, вода и звёзды.",

    "rooms.kicker": "Оставайтесь у нас", "rooms.title": "Номера и домики",
    "rooms.subtitle": "Просто, тепло и чисто. Из каждого номера видно лес или реку.",
    "rooms.perNight": "/ ночь", "rooms.upTo": "До {n} гостей", "rooms.reserve": "Бронировать",
    "rooms.som": "сом", "rooms.available": "Свободно",

    "reserve.kicker": "Бронирование", "reserve.title": "Забронируйте отдых",
    "reserve.subtitle": "Это займёт минуту. Мы перезвоним вам для подтверждения — без оплаты онлайн.",
    "reserve.stepDates": "Даты", "reserve.stepRoom": "Номер", "reserve.stepDetails": "Данные", "reserve.stepDone": "Готово",
    "reserve.s1Title": "Когда вы приезжаете?",
    "reserve.checkIn": "Заезд", "reserve.checkOut": "Выезд", "reserve.guests": "Гости",
    "reserve.checkBtn": "Найти свободные номера",
    "reserve.s2Title": "Выберите номер",
    "reserve.noRooms": "К сожалению, на эти даты нет свободных номеров. Попробуйте другие даты или позвоните нам.",
    "reserve.nights": "{n} ночей", "reserve.night": "1 ночь",
    "reserve.choose": "Выбрать", "reserve.total": "всего", "reserve.back": "← Назад",
    "reserve.s3Title": "Ваши данные",
    "reserve.name": "Имя и фамилия", "reserve.phone": "Номер телефона", "reserve.email": "Эл. почта",
    "reserve.optional": "(необязательно)", "reserve.notes": "Что нам стоит знать?",
    "reserve.notesPh": "Время приезда, дети, питание...",
    "reserve.confirmBtn": "Подтвердить бронь",
    "reserve.s4Title": "Бронь принята!",
    "reserve.s4Msg": "Спасибо. Мы скоро позвоним вам, чтобы подтвердить ваш отдых.",
    "reserve.reference": "Номер брони", "reserve.another": "Сделать ещё одну бронь",
    "reserve.errDates": "Пожалуйста, выберите обе даты.",
    "reserve.errOrder": "Дата выезда должна быть позже даты заезда.",
    "reserve.errPast": "Эти даты уже в прошлом.",
    "reserve.errName": "Пожалуйста, введите ваше имя.",
    "reserve.errPhone": "Пожалуйста, укажите номер телефона для подтверждения.",
    "reserve.sumGuest": "Гость", "reserve.sumRoom": "Номер", "reserve.sumDates": "Даты",
    "reserve.sumGuests": "Гости", "reserve.sumTotal": "Итого",

    "exp.kicker": "Чем заняться", "exp.title": "Дни, ради которых стоит замедлиться",
    "exp.e1Title": "Горные походы", "exp.e1Desc": "Тропы вдоль ущелья — от лёгких прогулок у реки до горных хребтов.",
    "exp.e2Title": "Ловля форели", "exp.e2Desc": "Ловите рыбу в холодной реке, а мы приготовим ваш улов на ужин.",
    "exp.e3Title": "Вечерний костёр", "exp.e3Desc": "Чай, истории и небо в звёздах, когда солнце уходит за хребет.",
    "exp.e4Title": "Конные прогулки", "exp.e4Desc": "Поездка на высокогорные пастбища с местным проводником.",
    "exp.e5Title": "Баня и отдых", "exp.e5Desc": "Баня на дровах у воды — лучший способ завершить холодный день.",
    "exp.e6Title": "Местная еда", "exp.e6Desc": "Мёд, свежий хлеб, бешбармак и чай — всё своё, домашнее.",

    "gallery.kicker": "Оглянитесь вокруг", "gallery.title": "Ущелье в фотографиях",
    "gallery.subtitle": "Замените их своими фотографиями — макет подстроится сам.",
    "gallery.hint": "Ваше фото",

    "contact.kicker": "Найдите нас", "contact.title": "Приезжайте к нам",
    "contact.lead": "Проще всего связаться с нами по телефону или в WhatsApp. Отвечаем на кыргызском, русском и английском.",
    "contact.address": "Адрес", "contact.addressValue": "Чычканское ущелье, Таласская область, Кыргызстан",
    "contact.phone": "Телефон", "contact.email": "Эл. почта",
    "contact.hours": "Открыто", "contact.hoursValue": "Круглый год · ресепшн 8:00–22:00",
    "contact.whatsapp": "Написать в WhatsApp", "contact.reserve": "Забронировать номер",
    "contact.mapHint": "Здесь будет карта",

    "footer.tagline": "Семейный горный отдых в Чычканском ущелье.",
    "footer.rights": "© 2026 Чычкан. Сделано с заботой."
  },

  ky: {
    "meta.title": "Чычкан · Чычкан капчыгайындагы тоо эс алуусу",
    "meta.description": "Чычкан — Талас облусундагы, Кыргызстандагы Чычкан капчыгайында жайгашкан үй-бүлөлүк тоо эс алуу жайы. Бөлмө ээлеп коюңуз.",

    "nav.about": "Биз жөнүндө", "nav.rooms": "Бөлмөлөр", "nav.experiences": "Эс алуу",
    "nav.gallery": "Галерея", "nav.contact": "Байланыш", "nav.reserve": "Ээлеп коюу",

    "hero.kicker": "Чычкан капчыгайы · Талас, Кыргызстан",
    "hero.title": "Тоодогу тынч жер",
    "hero.subtitle": "Чычкан капчыгайынын карагай токойлорунун арасында, дарыя жээгиндеги үй-бүлөлүк эс алуу жайы.",
    "hero.ctaReserve": "Бөлмө ээлөө", "hero.ctaExplore": "Толугураак",
    "hero.stat1": "Бийиктик", "hero.stat2": "Жайкы күндүз", "hero.stat3": "Үй-бүлөлүк иш",

    "about.kicker": "Биздин окуя",
    "about.title": "Үч муундан бери үй-бүлөбүзгө таандык тынч жер",
    "about.p1": "Чычкан жол менен дарыя кошулган жерде, Талас тоолорунун тар жашыл капчыгайында жайгашкан. Биз ушул жерде чоңойдук. Бүгүн биз меймандарды чоң ата-апаларыбыз тосуп алгандай тосуп алабыз — жылуу тамак, таза бөлмөлөр жана ачык терезеден угулган дарыянын добушу менен.",
    "about.p2": "Бул жерде шашуунун кереги жок. Адамдар басууга, балык уулоого, оттун жанында отурууга жана чындап муздак, таза аба менен дем алууга келишет. Сиз эс ала алышыңыз үчүн биз баарын жөнөкөй кылабыз.",
    "about.f1Title": "Таза тоо абасы", "about.f1Desc": "1800 метр бийиктикте салкын, таза аба — жайдын ортосунда да.",
    "about.f2Title": "Жаңы форель жана үй тамагы", "about.f2Desc": "Дарыядан форель жана өз ашканабыздан нан — күн сайын.",
    "about.f3Title": "Тынч жана алыс", "about.f3Desc": "Көп эл да, ызы-чуу да жок — карагай токою, суу жана жылдыздар гана.",

    "rooms.kicker": "Биз менен калыңыз", "rooms.title": "Бөлмөлөр жана үйлөр",
    "rooms.subtitle": "Жөнөкөй, жылуу жана таза. Ар бир бөлмөдөн токой же дарыя көрүнөт.",
    "rooms.perNight": "/ түн", "rooms.upTo": "{n} конокко чейин", "rooms.reserve": "Ээлөө",
    "rooms.som": "сом", "rooms.available": "Бош",

    "reserve.kicker": "Ээлеп коюу", "reserve.title": "Эс алууңузду ээлеп коюңуз",
    "reserve.subtitle": "Бир мүнөт убакыт алат. Ырастоо үчүн биз кайра чалабыз — онлайн төлөм жок.",
    "reserve.stepDates": "Күндөр", "reserve.stepRoom": "Бөлмө", "reserve.stepDetails": "Маалымат", "reserve.stepDone": "Бүттү",
    "reserve.s1Title": "Качан келесиз?",
    "reserve.checkIn": "Келүү", "reserve.checkOut": "Кетүү", "reserve.guests": "Меймандар",
    "reserve.checkBtn": "Бош бөлмөлөрдү табуу",
    "reserve.s2Title": "Бөлмөңүздү тандаңыз",
    "reserve.noRooms": "Кечиресиз, бул күндөргө бош бөлмө жок. Башка күндөрдү тандаңыз же бизге чалыңыз.",
    "reserve.nights": "{n} түн", "reserve.night": "1 түн",
    "reserve.choose": "Тандоо", "reserve.total": "бардыгы", "reserve.back": "← Артка",
    "reserve.s3Title": "Сиздин маалыматыңыз",
    "reserve.name": "Аты-жөнү", "reserve.phone": "Телефон номери", "reserve.email": "Эл. почта",
    "reserve.optional": "(милдеттүү эмес)", "reserve.notes": "Билишибиз керек нерсе барбы?",
    "reserve.notesPh": "Келүү убактысы, балдар, тамактануу...",
    "reserve.confirmBtn": "Ээлөөнү ырастоо",
    "reserve.s4Title": "Ээлөө кабыл алынды!",
    "reserve.s4Msg": "Рахмат. Эс алууңузду ырастоо үчүн жакында чалабыз.",
    "reserve.reference": "Ээлөө номери", "reserve.another": "Дагы бир ээлөө жасоо",
    "reserve.errDates": "Эки күндү тең тандаңыз.",
    "reserve.errOrder": "Кетүү күнү келүү күнүнөн кийин болушу керек.",
    "reserve.errPast": "Бул күндөр өтүп кеткен.",
    "reserve.errName": "Атыңызды жазыңыз.",
    "reserve.errPhone": "Ырастоо үчүн телефон номериңизди жазыңыз.",
    "reserve.sumGuest": "Конок", "reserve.sumRoom": "Бөлмө", "reserve.sumDates": "Күндөр",
    "reserve.sumGuests": "Меймандар", "reserve.sumTotal": "Жалпы",

    "exp.kicker": "Эмне кылса болот", "exp.title": "Жайыраак өткөрүүгө татыктуу күндөр",
    "exp.e1Title": "Тоо сейилдөөлөрү", "exp.e1Desc": "Капчыгай боюндагы жолдор — дарыя жээгиндеги жеңил сейилдөөдөн тоо кырларына чейин.",
    "exp.e2Title": "Форель уулоо", "exp.e2Desc": "Муздак дарыядан балык уулаңыз, биз аны кечки тамакка даярдайбыз.",
    "exp.e3Title": "Кечки от", "exp.e3Desc": "Чай, аңгемелер жана күн кырдын артына киргенде жылдызга толгон асман.",
    "exp.e4Title": "Атка минүү", "exp.e4Desc": "Ар бир жолду билген жергиликтүү жол башчы менен бийик жайлоого чыгыңыз.",
    "exp.e5Title": "Мончо жана эс алуу", "exp.e5Desc": "Суу жээгиндеги отунга жагылган мончо — суук күндү аяктоонун эң жакшы жолу.",
    "exp.e6Title": "Жергиликтүү тамак", "exp.e6Desc": "Бал, жаңы нан, бешбармак жана чай — баары ушул жерден, баары үй тамагы.",

    "gallery.kicker": "Айланага көз чаптырыңыз", "gallery.title": "Сүрөттөрдөгү капчыгай",
    "gallery.subtitle": "Буларды өзүңүздүн сүрөттөрүңүз менен алмаштырыңыз — жайгашуу өзү ыңгайлашат.",
    "gallery.hint": "Сиздин сүрөтүңүз",

    "contact.kicker": "Бизди табыңыз", "contact.title": "Бизге келиңиз",
    "contact.lead": "Биз менен байланышуунун эң оңой жолу — телефон же WhatsApp. Кыргызча, орусча жана англисче жооп беребиз.",
    "contact.address": "Дарек", "contact.addressValue": "Чычкан капчыгайы, Талас облусу, Кыргызстан",
    "contact.phone": "Телефон", "contact.email": "Эл. почта",
    "contact.hours": "Ачык", "contact.hoursValue": "Жыл бою · кабылдоо 8:00–22:00",
    "contact.whatsapp": "WhatsApp аркылуу жазуу", "contact.reserve": "Бөлмө ээлөө",
    "contact.mapHint": "Бул жерде карта болот",

    "footer.tagline": "Чычкан капчыгайындагы үй-бүлөлүк тоо эс алуу жайы.",
    "footer.rights": "© 2026 Чычкан. Кылдаттык менен жасалган."
  }
};

/* ----- engine ------------------------------------------------------ */
const Lang = {
  current: "en",
  supported: ["en", "ru", "ky"],

  t(key, vars) {
    let s = (I18N[this.current] && I18N[this.current][key]) || I18N.en[key] || key;
    if (vars) for (const k in vars) s = s.replace("{" + k + "}", vars[k]);
    return s;
  },

  set(lang) {
    if (!this.supported.includes(lang)) lang = "en";
    this.current = lang;
    try { localStorage.setItem("chychkan_lang", lang); } catch (e) {}
    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    this.apply();
    // let the app re-render dynamic parts (rooms, etc.)
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  },

  /** Replace all static text/placeholders/meta marked with data-i18n. */
  apply() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = this.t(key);
      if (el.tagName === "TITLE") { el.textContent = val; }
      else if (el.tagName === "META") { el.setAttribute("content", val); }
      else { el.textContent = val; }
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      el.setAttribute("placeholder", this.t(el.getAttribute("data-i18n-ph")));
    });
    // reflect active language button
    document.querySelectorAll("[data-set-lang]").forEach(b => {
      b.classList.toggle("is-active", b.getAttribute("data-set-lang") === this.current);
    });
  },

  init() {
    let saved;
    try { saved = localStorage.getItem("chychkan_lang"); } catch (e) {}
    const guess = saved || (navigator.language || "en").slice(0, 2);
    this.set(this.supported.includes(guess) ? guess : "en");
  }
};
