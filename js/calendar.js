/* Month calendar + day detail panel */

(function () {
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function toISO(year, monthIndex, day) {
    return `${year}-${pad(monthIndex + 1)}-${pad(day)}`;
  }

  function initCalendar() {
    const root = document.getElementById("calendar-root");
    if (!root || !window.StemClub) return;

    const now = new Date();
    let viewYear = now.getFullYear();
    let viewMonth = now.getMonth();
    let selectedISO = null;

    root.innerHTML = `
      <div class="calendar-shell">
        <div class="calendar">
          <div class="cal-toolbar">
            <button class="icon-btn" type="button" data-cal="prev" aria-label="Previous month">‹</button>
            <h2 data-cal="label"></h2>
            <button class="icon-btn" type="button" data-cal="next" aria-label="Next month">›</button>
          </div>
          <div class="cal-grid" data-cal="grid" role="grid" aria-label="Event calendar"></div>
        </div>
        <aside class="side-panel">
          <h3 data-cal="side-title">Upcoming</h3>
          <div data-cal="side-body"></div>
        </aside>
      </div>
    `;

    const label = root.querySelector('[data-cal="label"]');
    const grid = root.querySelector('[data-cal="grid"]');
    const sideTitle = root.querySelector('[data-cal="side-title"]');
    const sideBody = root.querySelector('[data-cal="side-body"]');

    root.querySelector('[data-cal="prev"]').addEventListener("click", () => {
      viewMonth -= 1;
      if (viewMonth < 0) {
        viewMonth = 11;
        viewYear -= 1;
      }
      selectedISO = null;
      render();
    });

    root.querySelector('[data-cal="next"]').addEventListener("click", () => {
      viewMonth += 1;
      if (viewMonth > 11) {
        viewMonth = 0;
        viewYear += 1;
      }
      selectedISO = null;
      render();
    });

    // Event delegation — more reliable than per-cell listeners
    grid.addEventListener("click", (event) => {
      const dayBtn = event.target.closest("button[data-date]");
      if (!dayBtn || !grid.contains(dayBtn)) return;
      selectedISO = dayBtn.dataset.date;
      render();
    });

    function renderSide() {
      if (selectedISO) {
        const dayEvents = window.StemClub.eventsOnDate(selectedISO);
        sideTitle.textContent = window.StemClub.formatLong(selectedISO);
        sideBody.innerHTML = window.StemClub.renderEventRows(
          dayEvents,
          "No events on this day."
        );
        return;
      }

      const upcoming = window.StemClub.upcomingEvents(4);
      sideTitle.textContent = "Coming up";
      sideBody.innerHTML = window.StemClub.renderEventRows(
        upcoming,
        "No upcoming events yet."
      );
    }

    function render() {
      label.textContent = `${MONTHS[viewMonth]} ${viewYear}`;
      const map = window.StemClub.eventMapByDay(viewYear, viewMonth);
      const first = new Date(viewYear, viewMonth, 1);
      const startDow = first.getDay();
      const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
      const todayISO = toISO(now.getFullYear(), now.getMonth(), now.getDate());

      const cells = [];
      for (const d of DOW) {
        cells.push(`<div class="cal-dow" role="columnheader">${d}</div>`);
      }

      for (let i = 0; i < startDow; i += 1) {
        cells.push(`<div class="cal-day muted" aria-hidden="true"></div>`);
      }

      for (let day = 1; day <= daysInMonth; day += 1) {
        const iso = toISO(viewYear, viewMonth, day);
        const events = map[iso] || [];
        const classes = ["cal-day"];
        if (iso === todayISO) classes.push("today");
        if (events.length) classes.push("has-event");
        if (iso === selectedISO) classes.push("is-selected");

        const dots = events
          .slice(0, 3)
          .map(() => `<span class="dot" aria-hidden="true"></span>`)
          .join("");

        const labelText = events.length
          ? `${iso}, ${events.length} event${events.length > 1 ? "s" : ""}`
          : iso;

        cells.push(`
          <button
            type="button"
            class="${classes.join(" ")}"
            data-date="${iso}"
            aria-label="${labelText}"
            aria-pressed="${iso === selectedISO ? "true" : "false"}"
          >
            <span class="day-num">${day}</span>
            <span class="dots">${dots}</span>
          </button>
        `);
      }

      grid.innerHTML = cells.join("");
      renderSide();
    }

    render();
  }

  document.addEventListener("DOMContentLoaded", initCalendar);
})();
