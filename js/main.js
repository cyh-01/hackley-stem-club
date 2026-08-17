/* Shared helpers for rendering events + presentations */

(function () {
  const data = window.STEM_CLUB || { events: [], presentations: [] };

  function parseDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function formatLong(iso) {
    return parseDate(iso).toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function formatShort(iso) {
    return parseDate(iso).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });
  }

  function yearOf(iso) {
    return String(parseDate(iso).getFullYear());
  }

  function isPast(iso, today = startOfDay(new Date())) {
    return parseDate(iso) < today;
  }

  function sortedEvents() {
    return [...(data.events || [])].sort((a, b) => a.date.localeCompare(b.date));
  }

  function upcomingEvents(limit) {
    const today = startOfDay(new Date());
    const list = sortedEvents().filter((e) => parseDate(e.date) >= today);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }

  function pastEvents() {
    const today = startOfDay(new Date());
    return sortedEvents()
      .filter((e) => parseDate(e.date) < today)
      .reverse();
  }

  function eventsOnDate(iso) {
    return (data.events || []).filter((e) => e.date === iso);
  }

  function eventMapByDay(year, monthIndex) {
    const map = {};
    for (const event of data.events || []) {
      const d = parseDate(event.date);
      if (d.getFullYear() === year && d.getMonth() === monthIndex) {
        (map[event.date] ||= []).push(event);
      }
    }
    return map;
  }

  function typeLabel(type) {
    const labels = {
      meeting: "Meeting",
      workshop: "Workshop",
      talk: "Talk",
      social: "Social",
      other: "Event",
    };
    return labels[type] || "Event";
  }

  function renderEventRows(events, emptyMessage) {
    if (!events.length) {
      return `<p class="empty">${emptyMessage}</p>`;
    }
    return `<div class="list">${events
      .map(
        (e) => `
      <article class="event-row">
        <div class="event-date">
          ${formatShort(e.date)}
          <small>${yearOf(e.date)}</small>
        </div>
        <div>
          <h3>${escapeHtml(e.title)}</h3>
          <p class="meta">${escapeHtml(e.time || "")}${e.time && e.location ? " · " : ""}${escapeHtml(e.location || "")}</p>
          <p class="desc">${escapeHtml(e.description || "")}</p>
        </div>
        <span class="tag">${escapeHtml(typeLabel(e.type))}</span>
      </article>`
      )
      .join("")}</div>`;
  }

  function subjectLabel(subject) {
    const labels = {
      math: "Math",
      cs: "CS",
      physics: "Physics",
      biology: "Biology",
      chemistry: "Chemistry",
    };
    return labels[subject] || "";
  }

  function subjectTag(subject) {
    const label = subjectLabel(subject);
    if (!label) return "";
    return `<span class="subject-mark subject-${escapeAttr(subject)}">${escapeHtml(label)}</span>`;
  }

  function talkHref(t) {
    if (t.id && (t.file || t.link)) {
      return `view.html?id=${encodeURIComponent(t.id)}`;
    }
    return "";
  }

  function talkLinkLabel(t) {
    if (t.link || t.file) return "View presentation";
    return "";
  }

  function renderTalkRows(talks, emptyMessage) {
    if (!talks.length) {
      return `<p class="empty">${emptyMessage}</p>`;
    }
    return `<div class="list">${talks
      .map((t) => {
        const href = talkHref(t);
        const link = href
          ? `<p class="meta"><a href="${escapeAttr(href)}">${talkLinkLabel(t)}</a></p>`
          : `<p class="meta">Presentation coming soon</p>`;
        const dateBlock = t.date
          ? `<div class="talk-date">
          ${formatShort(t.date)}
          <small>${yearOf(t.date)}</small>
        </div>`
          : `<div class="talk-date"><span class="date-unknown">${escapeHtml(t.presenter || data.name || "STEM Club")}</span></div>`;
        return `
      <article class="talk-row">
        ${dateBlock}
        <div>
          <h3 class="talk-title">${escapeHtml(t.title)}${subjectTag(t.subject)}</h3>
          <p class="desc">${escapeHtml(t.summary || "")}</p>
          ${link}
        </div>
      </article>`;
      })
      .join("")}</div>`;
  }

  function renderFeatured(talks) {
    if (!talks.length) return "";
    return `<div class="featured-grid">${talks
      .map((t) => {
        const href = talkHref(t);
        const link = href
          ? `<p><a href="${escapeAttr(href)}">View presentation →</a></p>`
          : `<p>Presentation coming soon</p>`;
        const metaBits = [
          t.presenter || data.name || "Hackley STEM Club",
          t.date ? formatLong(t.date) : "",
        ].filter(Boolean);
        return `
      <article class="feature-block">
        <div>
          <p class="meta">${escapeHtml(metaBits.join(" · "))}</p>
          <h3 class="talk-title">${escapeHtml(t.title)}${subjectTag(t.subject)}</h3>
          <p>${escapeHtml(t.summary || "")}</p>
        </div>
        ${link}
      </article>`;
      })
      .join("")}</div>`;
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replaceAll("'", "&#39;");
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  }

  function markActiveNav() {
    const page = document.body.dataset.page;
    if (!page) return;
    document.querySelectorAll(".nav a[data-nav]").forEach((a) => {
      if (a.dataset.nav === page) a.setAttribute("aria-current", "page");
    });
  }

  window.StemClub = {
    data,
    parseDate,
    formatLong,
    formatShort,
    upcomingEvents,
    pastEvents,
    eventsOnDate,
    eventMapByDay,
    renderEventRows,
    renderTalkRows,
    renderFeatured,
    setText,
    markActiveNav,
    isPast,
  };

  document.addEventListener("DOMContentLoaded", () => {
    markActiveNav();
    setText("club-name", data.name);
    setText("club-name-footer", data.name);
    setText("club-tagline", data.tagline);
    setText("meeting-note", data.meetingNote);
    setText("hero-meet", data.meetingNote);
    const mail = document.getElementById("contact-email");
    if (mail && data.contactEmail) {
      mail.href = `mailto:${data.contactEmail}`;
      mail.textContent = data.contactEmail;
    }
  });
})();
