function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");
  var halfValue = splittedText.length / 2;

  var clutter = "";
  splittedText.forEach((ele, idx) => {
    if (idx < halfValue) {
      clutter += `<span class='firstHalf'>${ele}</span>`;
    } else {
      clutter += `<span class='secondHalf'>${ele}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .firstHalf", {
  y: 50,
  duration: 0.6,
  delay: 0.5,
  opacity: 0,
  stagger: 0.15,
});
gsap.from("h1 .secondHalf", {
  y: 100,
  duration: 0.6,
  delay: 0.5,
  opacity: 0,
  stagger: -0.15,
});
