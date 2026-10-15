const typewriter = document.querySelector(".typewriter-text");
const phrases = [
  "Crio experiências digitais intuitivas e soluções web sob medida.",
  "Uno design e tecnologia para transformar ideias em produtos funcionais.",
  "Desenvolvo soluções que aproximam negócios de pessoas.",
];
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (!prefersReducedMotion) {
  let phraseIndex = 0;
  let characterIndex = phrases[0].length;
  let deleting = false;

  const typeNextCharacter = () => {
    const phrase = phrases[phraseIndex];
    typewriter.textContent = phrase.slice(0, characterIndex);

    if (!deleting && characterIndex === phrase.length) {
      deleting = true;
      window.setTimeout(typeNextCharacter, 1800);
      return;
    }

    if (deleting && characterIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    characterIndex += deleting ? -1 : 1;
    window.setTimeout(typeNextCharacter, deleting ? 28 : 48);
  };

  window.setTimeout(() => {
    deleting = true;
    typeNextCharacter();
  }, 1800);
}

if (window.matchMedia("(pointer: fine)").matches) {
  document.body.style.setProperty("--pointer-x", `${window.innerWidth / 2}px`);
  document.body.style.setProperty(
    "--pointer-y",
    `${window.innerHeight * 0.35}px`,
  );

  window.addEventListener(
    "pointermove",
    (event) => {
      const { clientX, clientY } = event;
      document.body.style.setProperty("--pointer-x", `${clientX}px`);
      document.body.style.setProperty("--pointer-y", `${clientY}px`);
    },
    { passive: true },
  );
}
