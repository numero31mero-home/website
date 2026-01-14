

gsap.registerPlugin(ScrollTrigger);

["#svg1","#svg2","#svg3","#svg4","#svg5"].forEach(id=>{
  gsap.set(id, { left:"50%", top:"50%", xPercent:-50, yPercent:-50, x:0, y:0 });
});
const hideUp = (sel) => {
  const el = document.querySelector(sel);
  const h = el ? el.getBoundingClientRect().height : window.innerHeight;
  return -(h + window.innerHeight * 0.2); // 여유 20%
};
// First star
const GAP = window.innerHeight * 1.2;
var svg1TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#clip1 .clip__inner",
    scrub: 2,
    pin: true,
    pinSpacing: false,
    invalidateOnRefresh: true
  }
});

svg1TL.fromTo("#svg1 video, #svg1 img", { y: "30%" }, { y: 0, ease:"none" }, 0);

// ⚠️ HTML에 #svg1__star / #svg__rec 없음 → 일단 주석
// svg1TL.to("#svg1__star", { morphSVG:{shape:"#svg__rec", origin:"50% 50%"}, ease:"none" }, 0);

svg1TL.fromTo(
  "#svg1",
  { width: () => (window.innerWidth < 600 ? 70 : 200) },
  { width: () => (window.innerWidth < window.innerHeight ? "100vh" : "100vw"), ease:"none" },
  0
);
svg1TL.to("#svg1", {
  onStart: () => document.querySelector("#svg1").classList.add("is-full"),
  onReverseComplete: () => document.querySelector("#svg1").classList.remove("is-full")
}, 0.7);

// Stars 2,3,4,5 could be in a function
// Second star

gsap.set("#svg2", { y: GAP });

var trans12 = gsap.timeline({
  scrollTrigger: {
    trigger: "#clip1__scroll",
    scrub: true,
    start: "bottom bottom",
    end: "+=100%",
    invalidateOnRefresh: true
  }
});

trans12
  .to("#svg1", { y: () => hideUp("#svg1"), ease: "none" }, 0)
  .to("#svg2", { y: 0,        ease:"none" }, 0.2);

var svg2TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#clip1__scroll",
    scrub: 2,
    start: "bottom bottom",
    end: "+=100%",
    invalidateOnRefresh: true
  }
});

svg2TL.fromTo("#svg2 video, #svg2 img", { y: "30%" }, { y: 0, ease:"none" }, 0);
// morph 주석
// svg2TL.to("#svg2__star", { morphSVG:{shape:"#svg__rec2", origin:"50% 50%"} }, 0);
svg2TL.fromTo(
  "#svg2",
  { width: () => (window.innerWidth < 600 ? 70 : 200) },
  { width: () => (window.innerWidth < window.innerHeight ? "100vh" : "100vw"), ease:"none" },
  0
);

svg2TL.to("#svg2", {
  onStart: () => document.querySelector("#svg2").classList.add("is-full"),
  onReverseComplete: () => document.querySelector("#svg2").classList.remove("is-full")
}, 0.9);

// Third star
gsap.set("#svg3", { y: "100svh" });

var trans23 = gsap.timeline({
  scrollTrigger: {
    trigger: "#clip2__scroll",
    scrub: true,
    start: "bottom bottom",
    end: "+=100%",
    invalidateOnRefresh: true
  }
});

trans23
  .to("#svg2", { y: () => hideUp("#svg2"), ease: "none" }, 0)
  .to("#svg3", { y: 0,        ease:"none" }, 0.2);

var svg3TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#clip2__scroll",
    scrub: 2,
    start: "bottom bottom",
    end: "+=100%",
    invalidateOnRefresh: true
  }
});

svg3TL.fromTo("#svg3 video, #svg3 img", { y: "30%" }, { y: 0, ease:"none" }, 0);
// svg3TL.to("#svg3__star", { morphSVG:{shape:"#svg__rec3", origin:"50% 50%"} }, 0);
svg3TL.fromTo(
  "#svg3",
  { width: () => (window.innerWidth < 600 ? 70 : 200) },
  { width: () => (window.innerWidth < window.innerHeight ? "100vh" : "100vw"), ease:"none" },
  0
);
svg3TL.to("#svg3", {
  onStart: () => document.querySelector("#svg3").classList.add("is-full"),
  onReverseComplete: () => document.querySelector("#svg3").classList.remove("is-full")
}, 0.9);
// Four star
gsap.set("#svg4", { y: "100svh" });

var trans34 = gsap.timeline({
  scrollTrigger: {
    trigger: "#clip3__scroll",
    scrub: true,
    start: "bottom bottom",
    end: "+=100%",
    invalidateOnRefresh: true
  }
});

trans34
  .to("#svg3", { y: () => hideUp("#svg3"), ease: "none" }, 0)
  .to("#svg4", { y: 0,        ease:"none" }, 0.2);

var svg4TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#clip3__scroll",
    scrub: 2,
    start: "bottom bottom",
    end: "+=100%",
    invalidateOnRefresh: true
  }
});

svg4TL.fromTo("#svg4 video, #svg4 img", { y: "30%" }, { y: 0, ease:"none" }, 0);
// svg4TL.to("#svg4__star", { morphSVG:{shape:"#svg__rec4", origin:"50% 50%"} }, 0);
svg4TL.fromTo(
  "#svg4",
  { width: () => (window.innerWidth < 600 ? 70 : 200) },
  { width: () => (window.innerWidth < window.innerHeight ? "100vh" : "100vw"), ease:"none" },
  0
);

svg4TL.to("#svg4", {
  onStart: () => document.querySelector("#svg4").classList.add("is-full"),
  onReverseComplete: () => document.querySelector("#svg4").classList.remove("is-full")
}, 0.9);
// five star
gsap.set("#svg5", { y: "100svh" });

var trans45 = gsap.timeline({
  scrollTrigger: {
    trigger: "#clip4__scroll",
    scrub: true,
    start: "bottom bottom",
    end: "+=100%",
    invalidateOnRefresh: true
  }
});

trans45
  .to("#svg4", { y: () => hideUp("#svg4"), ease: "none" }, 0)
  .to("#svg5", { y: 0,        ease:"none" }, 0.2);

var svg5TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#clip4__scroll",
    scrub: 2,
    start: "bottom bottom",
    end: "+=100%",
    invalidateOnRefresh: true
  }
});

svg5TL.fromTo("#svg5 video, #svg5 img", { y: "30%" }, { y: 0, ease:"none" }, 0);
// svg5TL.to("#svg5__star", { morphSVG:{shape:"#svg__rec5", origin:"50% 50%"} }, 0);
svg5TL.fromTo(
  "#svg5",
  { width: () => (window.innerWidth < 600 ? 70 : 200) },
  { width: () => (window.innerWidth < window.innerHeight ? "100vh" : "100vw"), ease:"none" },
  0
);
svg5TL.to("#svg5", {
  onStart: () => document.querySelector("#svg5").classList.add("is-full"),
  onReverseComplete: () => document.querySelector("#svg5").classList.remove("is-full")
}, 0.9);


window.addEventListener("load", () => ScrollTrigger.refresh());
window.addEventListener("resize", () => ScrollTrigger.refresh());

