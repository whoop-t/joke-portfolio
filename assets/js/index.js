const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'Nextjs',
  'Redux',
  'Node/Express',
  'MongoDB',
  'HTML',
  'CSS/SCSS/JSS',
  'BootStrap',
  'Material'
];

const el = document.getElementById('skills-wrapper');
skills.forEach(skill => {
  let newEl = document.createElement('div');
  newEl.className = 'skill';
  newEl.innerHTML = skill;
  el.appendChild(newEl);
});
