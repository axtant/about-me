const { animate, stagger } = Motion;

async function main() {
  // Nav + hero
  await animate(
    '#nav > *, #content > h1, #content > p, #content > .bio',
    { opacity: [0, 1], y: [20, 0], blur: [1, 0] },
    { delay: stagger(0.06) }
  );

  // Writing list
  await animate(
    '#projects > h2, #projects > a',
    { opacity: [0, 1], x: [-20, 0], blur: [1, 0] },
    { delay: stagger(0.06) }
  );

  // Footer
  await animate(
    '#footer > a',
    { opacity: [0, 1], y: [16, 0] },
    { delay: stagger(0.1), duration: 0.15 }
  );
}

// "Blog" nav link scrolls to writing section
document.getElementById('nav-blog').addEventListener('click', e => {
  e.preventDefault();
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

main();
