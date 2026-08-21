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
        "Popularized by famous math YouTuber 3Blue1Brown, Manim is a python library designed to help people create their own mathematical animations, similar to his own videos. In this presentation, learn how to begin using Manim for your animations.",
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
        "The sum of all integers from 1 to n, triangular numbers are a quintessential mathematical tool. In this presentation, learn how to use & derive triangular numbers, along with tetrahedral numbers.",
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
        "Ever wonder where E=mc^2 comes from? In this presentation, you'll learn about some of the most drastic effects (such as time dilation & length contraction) SR has, why they exist, and some of the history behind it.",
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
        "Imagine powering the entire world with a fuel source that's virtually limitless and produces little to no carbon emissions. Nuclear fusion, the same process that powers the sun, is finally becoming a reality on Earth.",
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
        "The immune system is an integral part of biology -- it's how the body protects itself from unwanted invaders. In this presentation, learn more about exactly what it is, and how the immune system functions.",
      link: "https://docs.google.com/presentation/d/1Y460WhkLspSJal9UMvf0bgtfEjRfEXA1-fYB0zmLu9Y/edit?usp=sharing",
      file: "",
      featured: true,
    },
  ],
};
