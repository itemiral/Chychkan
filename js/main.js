/* =========================================================
   main.js — App logic
   Rooms rendering · reservation flow · header · language wiring
   Vanilla JS, no dependencies.
   ========================================================= */
(function () {
  "use strict";

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---- helpers ---- */
  const fmtMoney = n => n.toLocaleString("ru-RU"); // 4500 -> "4 500"
  const todayISO = () => new Date().toISOString().slice(0, 10);
  function nightsBetween(a, b) {
    const ms = new Date(b) - new Date(a);
    return Math.max(0, Math.round(ms / 86400000));
  }
  function fmtDate(iso) {
    // human, locale-aware: "10 Jun 2026"
    try {
      const map = { en: "en-GB", ru: "ru-RU", ky: "ru-RU" };
      return new Date(iso).toLocaleDateString(map[Lang.current] || "en-GB",
        { day: "numeric", month: "short", year: "numeric" });
    } catch (e) { return iso; }
  }
  function nightsLabel(n) {
    return n === 1 ? Lang.t("reserve.night") : Lang.t("reserve.nights", { n });
  }

  /* =======================================================
     ROOMS GRID
     ======================================================= */
  function renderRooms() {
    const grid = $("#roomGrid");
    if (!grid) return;
    grid.innerHTML = ROOMS.map((r, i) => `
      <article class="room-card reveal d${(i % 4) + 1}">
        <div class="room-photo" style="background-image:${r.gradient}">
          <span class="room-badge">${Lang.t("rooms.available")}</span>
        </div>
        <div class="room-body">
          <h3 class="room-name">${r.name[Lang.current] || r.name.en}</h3>
          <p class="room-desc">${r.desc[Lang.current] || r.desc.en}</p>
          <div class="room-meta">
            <span class="room-cap">${Lang.t("rooms.upTo", { n: r.capacity })}</span>
            <span class="room-price">${fmtMoney(r.price)} ${Lang.t("rooms.som")}<span class="per"> ${Lang.t("rooms.perNight")}</span></span>
          </div>
          <button class="btn btn-primary btn-block" data-reserve-room="${r.id}">${Lang.t("rooms.reserve")}</button>
        </div>
      </article>
    `).join("");
  }

  /* =======================================================
     RESERVATION FLOW
     ======================================================= */
  const flow = {
    checkIn: "", checkOut: "", guests: 2, nights: 0,
    room: null, results: []
  };

  function goToStep(n) {
    $$(".step-panel").forEach(p => p.classList.toggle("is-active", +p.dataset.panel === n));
    $$(".step").forEach(s => {
      const sn = +s.dataset.step;
      s.classList.toggle("is-active", sn === n);
      s.classList.toggle("is-done", sn < n);
    });
    // bring the reserve card into view (helpful on phones)
    const card = $(".reserve-card");
    if (card && n > 1) card.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function showError(el, msg) {
    el.textContent = msg; el.hidden = false;
  }
  function clearError(el) { el.hidden = true; el.textContent = ""; }

  /* ---- guests stepper ---- */
  function updateGuests(delta) {
    flow.guests = Math.min(10, Math.max(1, flow.guests + delta));
    $("#guestValue").textContent = flow.guests;
  }

  /* ---- STEP 1 -> 2 : find rooms ---- */
  function findRooms() {
    const err = $("#step1Error");
    clearError(err);
    flow.checkIn = $("#checkIn").value;
    flow.checkOut = $("#checkOut").value;

    if (!flow.checkIn || !flow.checkOut) return showError(err, Lang.t("reserve.errDates"));
    if (flow.checkIn < todayISO())       return showError(err, Lang.t("reserve.errPast"));
    if (flow.checkOut <= flow.checkIn)   return showError(err, Lang.t("reserve.errOrder"));

    flow.nights = nightsBetween(flow.checkIn, flow.checkOut);
    flow.results = Availability.search(flow.checkIn, flow.checkOut, flow.guests);
    renderResults();
    goToStep(2);
  }

  function renderResults() {
    const list = $("#availList");
    const none = $("#noRooms");
    $("#searchSummary").textContent =
      `${fmtDate(flow.checkIn)} → ${fmtDate(flow.checkOut)} · ${nightsLabel(flow.nights)} · ${flow.guests} ${Lang.t("reserve.sumGuests").toLowerCase()}`;

    if (!flow.results.length) {
      list.innerHTML = ""; none.hidden = false; return;
    }
    none.hidden = true;
    list.innerHTML = flow.results.map(r => {
      const total = r.price * flow.nights;
      return `
        <div class="avail-row">
          <div class="avail-thumb" style="background-image:${r.gradient}"></div>
          <div class="avail-info">
            <div class="avail-name">${r.name[Lang.current] || r.name.en}</div>
            <div class="avail-sub">${fmtMoney(r.price)} ${Lang.t("rooms.som")} ${Lang.t("rooms.perNight")} · ${Lang.t("rooms.upTo", { n: r.capacity })}</div>
          </div>
          <div class="avail-price">
            <div class="avail-total">${fmtMoney(total)} ${Lang.t("rooms.som")}</div>
            <div class="avail-pernight">${nightsLabel(flow.nights)} · ${Lang.t("reserve.total")}</div>
          </div>
          <button class="btn btn-primary" data-choose="${r.id}">${Lang.t("reserve.choose")}</button>
        </div>`;
    }).join("");
  }

  /* ---- STEP 2 -> 3 : choose a room ---- */
  function chooseRoom(roomId) {
    flow.room = ROOMS.find(r => r.id === roomId);
    if (!flow.room) return;
    const total = flow.room.price * flow.nights;
    $("#chosenRoom").innerHTML = `
      <div class="cr-name">${flow.room.name[Lang.current] || flow.room.name.en}</div>
      <div class="cr-meta">${fmtDate(flow.checkIn)} → ${fmtDate(flow.checkOut)} · ${nightsLabel(flow.nights)}</div>
      <div class="cr-meta"><strong>${fmtMoney(total)} ${Lang.t("rooms.som")}</strong> ${Lang.t("reserve.total")}</div>`;
    goToStep(3);
  }

  /* ---- STEP 3 -> 4 : confirm ---- */
  function confirmReservation() {
    const err = $("#step3Error");
    clearError(err);
    const name = $("#guestName").value.trim();
    const phone = $("#guestPhone").value.trim();
    if (!name)  return showError(err, Lang.t("reserve.errName"));
    if (!phone) return showError(err, Lang.t("reserve.errPhone"));

    const total = flow.room.price * flow.nights;
    const ref = "CHY-" + Math.abs(hashString(name + phone + flow.checkIn + Date.now()))
                          .toString(36).toUpperCase().slice(0, 6);

    const reservation = {
      ref, name, phone,
      email: $("#guestEmail").value.trim(),
      notes: $("#guestNotes").value.trim(),
      roomId: flow.room.id,
      checkIn: flow.checkIn, checkOut: flow.checkOut,
      guests: flow.guests, nights: flow.nights, total,
      createdAt: new Date().toISOString()
    };
    Availability.saveReservation(reservation);

    // confirmation screen
    $("#doneRef").textContent = ref;
    $("#doneSummary").innerHTML = `
      <div class="ds-row"><span class="ds-label">${Lang.t("reserve.sumGuest")}</span><span class="ds-value">${escapeHtml(name)}</span></div>
      <div class="ds-row"><span class="ds-label">${Lang.t("reserve.sumRoom")}</span><span class="ds-value">${flow.room.name[Lang.current] || flow.room.name.en}</span></div>
      <div class="ds-row"><span class="ds-label">${Lang.t("reserve.sumDates")}</span><span class="ds-value">${fmtDate(flow.checkIn)} → ${fmtDate(flow.checkOut)}</span></div>
      <div class="ds-row"><span class="ds-label">${Lang.t("reserve.sumGuests")}</span><span class="ds-value">${flow.guests}</span></div>
      <div class="ds-row"><span class="ds-label">${Lang.t("reserve.sumTotal")}</span><span class="ds-value">${fmtMoney(total)} ${Lang.t("rooms.som")}</span></div>`;
    goToStep(4);
  }

  function resetFlow() {
    flow.room = null; flow.results = [];
    $("#guestName").value = ""; $("#guestPhone").value = "";
    $("#guestEmail").value = ""; $("#guestNotes").value = "";
    goToStep(1);
    $("#reserve").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---- small utils ---- */
  function hashString(s) { let h = 0; for (let i = 0; i < s.length; i++) { h = (h << 5) - h + s.charCodeAt(i); h |= 0; } return h; }
  function escapeHtml(s) { return s.replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c])); }

  /* =======================================================
     EVENT WIRING
     ======================================================= */
  function wire() {
    // language buttons
    $$("[data-set-lang]").forEach(b =>
      b.addEventListener("click", () => Lang.set(b.getAttribute("data-set-lang"))));

    // guests stepper
    $("#guestMinus").addEventListener("click", () => updateGuests(-1));
    $("#guestPlus").addEventListener("click", () => updateGuests(1));

    // step 1 -> 2
    $("#checkAvailBtn").addEventListener("click", findRooms);

    // back buttons
    $$("[data-back-to]").forEach(b =>
      b.addEventListener("click", () => goToStep(+b.getAttribute("data-back-to"))));

    // confirm + another
    $("#confirmBtn").addEventListener("click", confirmReservation);
    $("#anotherBtn").addEventListener("click", resetFlow);

    // delegated clicks: choose-room (step 2) and reserve-from-card (rooms section)
    document.addEventListener("click", e => {
      const choose = e.target.closest("[data-choose]");
      if (choose) return chooseRoom(choose.getAttribute("data-choose"));

      const fromCard = e.target.closest("[data-reserve-room]");
      if (fromCard) {
        const id = fromCard.getAttribute("data-reserve-room");
        $("#reserve").scrollIntoView({ behavior: "smooth", block: "start" });
        // preselect guests to room capacity-friendly default; user still picks dates
        const room = ROOMS.find(r => r.id === id);
        if (room && flow.guests > room.capacity) { flow.guests = room.capacity; $("#guestValue").textContent = flow.guests; }
        goToStep(1);
      }
    });

    // date input minimums (no past dates) + keep checkout after checkin
    const ci = $("#checkIn"), co = $("#checkOut");
    ci.min = todayISO(); co.min = todayISO();
    ci.addEventListener("change", () => {
      if (ci.value) { co.min = ci.value; if (co.value && co.value <= ci.value) co.value = ""; }
    });

    // sticky header shadow + hero scroll cue fade
    const header = $("#siteHeader");
    const onScroll = () => {
      header.classList.toggle("is-stuck", window.scrollY > 8);
      document.body.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

    // re-render dynamic parts when language changes
    document.addEventListener("langchange", () => {
      renderRooms();
      observeReveals(); // re-attach reveal to freshly rendered room cards
      if ($(".step-panel[data-panel='2']").classList.contains("is-active")) renderResults();
    });
  }

  /* =======================================================
     SCROLL REVEAL + SCROLL-SPY  (smoothness / polish)
     ======================================================= */
  const supportsIO = "IntersectionObserver" in window;

  const revealObserver = supportsIO ? new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); revealObserver.unobserve(en.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }) : null;

  function observeReveals() {
    const els = $$(".reveal:not([data-seen])");
    els.forEach(e => e.setAttribute("data-seen", "1"));
    if (!supportsIO) { els.forEach(e => e.classList.add("is-in")); return; }
    els.forEach(e => revealObserver.observe(e));
  }

  function initScrollSpy() {
    if (!supportsIO) return;
    const links = $$(".main-nav a");
    const map = {};
    links.forEach(a => { const id = a.getAttribute("href").slice(1); if (document.getElementById(id)) map[id] = a; });
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          links.forEach(a => a.classList.remove("is-current"));
          if (map[en.target.id]) map[en.target.id].classList.add("is-current");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    Object.keys(map).forEach(id => spy.observe(document.getElementById(id)));
  }

  /* ---- boot ---- */
  document.addEventListener("DOMContentLoaded", () => {
    Lang.init();      // sets language + applies static translations
    renderRooms();    // build room cards
    wire();           // attach handlers
    observeReveals(); // scroll-reveal for all .reveal elements
    initScrollSpy();  // highlight current section in the nav
    // default dates: tomorrow -> day after, to make the form inviting
    const ci = $("#checkIn"), co = $("#checkOut");
    const t = new Date(); t.setDate(t.getDate() + 1);
    const t2 = new Date(); t2.setDate(t2.getDate() + 2);
    ci.value = t.toISOString().slice(0, 10);
    co.value = t2.toISOString().slice(0, 10);
    co.min = ci.value;
  });
})();
