gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".container");
const colors = [
"#FF4D80",
"#FF3E41",
"#DF367C",
"#883955",
"#4C3549",
"#88498F",
"#423E3B",
"#000",
"gold",
"red",
"violet",
"limegreen",
"dodgerblue",
"#498f72",
"#0d1777"];


let panelCreated = false;
let panelNum = 3;

const createPanel = index => {
  const section = document.createElement("section");
  const h1 = document.createElement("h1");
  const div = document.createElement("div");
  container.appendChild(section);
  section.appendChild(h1);
  h1.innerHTML = `${index} metri`;
  gsap.set(section, {
    backgroundColor: colors[gsap.utils.random(0, colors.length - 1, 1)],
    className: `metro-${index}`});

};

ScrollTrigger.create({
  trigger: document.body,
  start: "top top",
  end: "bottom bottom",
  onUpdate: self => {
    let progress = self.progress.toFixed(2);
    if (progress >= 0.9 && self.direction === 1) {
      createPanel(panelNum++);
      ScrollTrigger.refresh();
    }
  }
});

/*second scroller*/
gsap.registerPlugin(ScrollTrigger);

var frame_count  = 9,
    offset_value = 100;

gsap.to(".viewer", {
  backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
  ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
  scrollTrigger: {
    trigger: ".scene",
    start: "top top",
    end: "+=" + (frame_count * offset_value),
    pin: true,
    scrub: true
  }
});