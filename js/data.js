/* =========================================================
   data.js — Rooms + Availability
   -----------------------------------------------------------------
   This file is the ONLY place that knows about rooms and what is
   free. Today it works fully on the frontend (mock data). When you
   are ready for a real backend, you only change ONE function:
   `Availability.check()` — see the big comment near the bottom.
   ========================================================= */

/* ----- ROOMS -------------------------------------------------------
   Edit prices, capacity and descriptions here.
   `name` and `desc` carry all three languages so the site stays
   translated. `gradient` is a placeholder image — replace with
   `photo: 'assets/room-cabin.jpg'` to use a real photo.            */
const ROOMS = [
  {
    id: "riverside-cabin",
    price: 4500,                 // per night, in som (KGS)
    capacity: 3,
    gradient: "linear-gradient(135deg,#6f8a78,#2c4d3b)",
    name: { en: "Riverside Cabin", ru: "Домик у реки", ky: "Дарыя жээгиндеги үй" },
    desc: {
      en: "A wooden cabin right above the water. Wake up to the sound of the river.",
      ru: "Деревянный домик прямо над водой. Просыпайтесь под шум реки.",
      ky: "Суунун үстүндөгү жыгач үй. Дарыянын добушу менен ойгонуңуз."
    }
  },
  {
    id: "forest-room",
    price: 3200,
    capacity: 2,
    gradient: "linear-gradient(135deg,#7d96a3,#3f5d4d)",
    name: { en: "Pine Forest Room", ru: "Номер в сосновом лесу", ky: "Карагай токойундагы бөлмө" },
    desc: {
      en: "A cosy double room surrounded by spruce. Quiet, warm and simple.",
      ru: "Уютный двухместный номер среди елей. Тихо, тепло и просто.",
      ky: "Карагайлардын арасындагы жайлуу эки кишилик бөлмө. Тынч, жылуу жана жөнөкөй."
    }
  },
  {
    id: "family-lodge",
    price: 6800,
    capacity: 5,
    gradient: "linear-gradient(135deg,#b6a079,#6b5a3c)",
    name: { en: "Family Lodge", ru: "Семейный дом", ky: "Үй-бүлөлүк үй" },
    desc: {
      en: "Two bedrooms and a wood stove — room for the whole family.",
      ru: "Две спальни и дровяная печь — место для всей семьи.",
      ky: "Эки бөлмө жана отун меши — бүт үй-бүлөгө орун бар."
    }
  },
  {
    id: "mountain-yurt",
    price: 3800,
    capacity: 4,
    gradient: "linear-gradient(135deg,#a3b4a0,#4a6a55)",
    name: { en: "Mountain Yurt", ru: "Горная юрта", ky: "Тоо боз үйү" },
    desc: {
      en: "A traditional felt yurt with thick blankets and a real fire.",
      ru: "Традиционная войлочная юрта с тёплыми одеялами и живым огнём.",
      ky: "Калың жууркандуу жана оту бар салттуу боз үй."
    }
  }
];

/* ----- AVAILABILITY (mock) ----------------------------------------
   Pretend bookings. Each entry blocks a room for [from, to).
   Dates are 'YYYY-MM-DD'. Delete these to make everything free.    */
const MOCK_BOOKINGS = [
  { roomId: "riverside-cabin", from: "2026-06-10", to: "2026-06-14" },
  { roomId: "family-lodge",    from: "2026-06-12", to: "2026-06-20" },
  { roomId: "mountain-yurt",   from: "2026-07-01", to: "2026-07-05" }
];

const Availability = {
  /** Do two date ranges [aFrom,aTo) and [bFrom,bTo) overlap? */
  _overlaps(aFrom, aTo, bFrom, bTo) {
    return aFrom < bTo && bFrom < aTo;
  },

  /**
   * Is a single room free for the requested dates?
   *
   *  >>> BACKEND HOOK <<<
   *  When you build the backend, replace the body of this function
   *  with a call to your API, e.g.:
   *
   *      return fetch(`/api/availability?room=${roomId}&in=${checkIn}&out=${checkOut}`)
   *               .then(r => r.json()).then(d => d.available);
   *
   *  Keep the same name and return a boolean (or a Promise<boolean>)
   *  and nothing else in the app needs to change.
   */
  check(roomId, checkIn, checkOut) {
    return !MOCK_BOOKINGS.some(b =>
      b.roomId === roomId && this._overlaps(checkIn, checkOut, b.from, b.to)
    );
  },

  /** All rooms that fit the guests AND are free for the dates. */
  search(checkIn, checkOut, guests) {
    return ROOMS.filter(r => r.capacity >= guests && this.check(r.id, checkIn, checkOut));
  },

  /**
   * Save a reservation request. Today: store locally so nothing is
   * lost and a future backend can read/replay it. Later: POST to your
   * server here.
   */
  saveReservation(reservation) {
    try {
      const key = "chychkan_reservations";
      const all = JSON.parse(localStorage.getItem(key) || "[]");
      all.push(reservation);
      localStorage.setItem(key, JSON.stringify(all));
    } catch (e) { /* localStorage unavailable — ignore for the demo */ }
    // BACKEND: return fetch('/api/reservations', {method:'POST', body: JSON.stringify(reservation)})
  }
};
