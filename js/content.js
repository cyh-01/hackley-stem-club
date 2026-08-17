/* ============================================================
   HACKLEY STEM CLUB: EDIT THIS FILE
   Add/change events and presentations here. Save, then redeploy
   on Netlify (drag the folder up again).
   ============================================================ */

window.STEM_CLUB = {
  // Club basics
  name: "Hackley STEM Club",
  tagline: "For all lovers of anything science, tech, engineering, or math.",
  meetingNote: "Day 2 in S118",
  contactEmail: "cho@students.hackleyschool.org",

  contact: {
    blurb:
      "Any questions? Contact Cooper (cho@students.hackleyschool.org) or Edmund (erose@students.hackleyschool.org).",
    meetingTime: "Every Day 2",
    meetingPlace: "S118",
    advisors: "",
    leaders: [
      {
        name: "Cooper",
        email: "cho@students.hackleyschool.org",
      },
      {
        name: "Edmund",
        email: "erose@students.hackleyschool.org",
      },
    ],
    instagram: "",
    discord: "",
  },

  /* ------------------------------------------------------------
     UPCOMING + PAST EVENTS
     - Use YYYY-MM-DD for date
     - type: "meeting" | "workshop" | "talk" | "social" | "other"
     - Events with a date before today show under Past Events
     ------------------------------------------------------------ */
  events: [
    {
      title: "Kickoff Meeting",
      date: "2026-09-08",
      time: "Day 2",
      location: "S118",
      type: "meeting",
      description: "Welcome back, club goals for the year, and presentation schedule and sign-ups.",
    },
  ],

  /* ------------------------------------------------------------
     PRESENTATIONS

     Animated decks (Google Slides / builds / motion):
       - Keep them in Google Slides
       - Set link: to the share URL (Anyone with the link can view)
       - They open in an on-site viewer; click through slides (animations work)

     Static / scrollable:
       - Export PDF → put in /decks/
       - Set file: "decks/your-file.pdf"

     You can set both: Slides for watching, PDF as a download backup.

     - id:       viewer URL  (view.html?id=fusion)
     - link:     Google Slides (or other) URL
     - file:     optional PDF path
     - subject:  "math" | "cs" | "physics" | "biology" | "chemistry"
     - featured: true → pinned at the top
     ------------------------------------------------------------ */
  presentations: [
    {
      id: "manim",
      title: "Manim",
      subject: "math",
      presenter: "Hackley STEM Club",
      date: "",
      summary:
        "Manim is a Python library for math animations, popularized by 3Blue1Brown. Learn how to start making your own.",
      link: "https://docs.google.com/presentation/d/1QROK1gFemeVfRaSNJlKfOCYxtuLiw3XJ/edit?usp=sharing",
      file: "",
      featured: false,
    },
    {
      id: "triangular",
      title: "Triangular Numbers",
      subject: "math",
      presenter: "Hackley STEM Club",
      date: "",
      summary:
        "The sum from 1 to n: how to use and derive triangular numbers, plus tetrahedral numbers.",
      link: "https://docs.google.com/presentation/d/1Ch1U65ePzzeeWppGdqe5G3SPwGC3x81uNvkPE0xitMQ/edit?usp=sharing",
      file: "",
      featured: false,
    },
    {
      id: "pytorch",
      title: "PyTorch",
      subject: "cs",
      presenter: "Hackley STEM Club",
      date: "",
      summary:
        "Intro to PyTorch: tensors, models, and the basics of training, with animated slides.",
      link: "https://docs.google.com/presentation/d/1TO9D0QtJcv45OH_vhO6_aKQeQRtkmvbnYuzE9Fy1xO4/edit?usp=sharing",
      file: "",
      featured: true,
    },
    {
      id: "relativity",
      title: "Special Relativity",
      subject: "physics",
      presenter: "Hackley STEM Club",
      date: "",
      summary:
        "Where E=mc² comes from: time dilation, length contraction, why they happen, and a bit of the history behind special relativity.",
      link: "https://docs.google.com/presentation/d/1UJjmQE2EFdPmBXB0mcg3lJXOzkCzkjDU/edit?usp=sharing",
      file: "",
      featured: true,
    },
    {
      id: "fusion",
      title: "Nuclear Fusion",
      subject: "physics",
      presenter: "Hackley STEM Club",
      date: "",
      summary:
        "The same process that powers the sun: nearly limitless fuel, little carbon, and breakthroughs that could reshape energy on Earth.",
      link: "https://docs.google.com/presentation/d/1Z0OKcE3E6IwJ6EmERz7Rbf2Z56KXXBC7/edit?usp=sharing",
      file: "",
      featured: false,
    },
    {
      id: "immune",
      title: "The Immune System",
      subject: "biology",
      presenter: "Hackley STEM Club",
      date: "",
      summary:
        "How the body protects itself from invaders: what the immune system is and how it works.",
      link: "https://docs.google.com/presentation/d/1Y460WhkLspSJal9UMvf0bgtfEjRfEXA1-fYB0zmLu9Y/edit?usp=sharing",
      file: "",
      featured: true,
    },
  ],
};
