let capital = prompt('Столица Украины? Львов - 1   Киев - 2   Харьков - 3');
let firstConstitution = prompt('Кем была написана первая конституция Украин?  Сагайдачный - 1  Мазепа - 2  Орлик - 3');
let firstAstronaut = prompt('Как звали первого человека который по бывал в космосе? Юрий Гагарин - 1  Нил Армстронг - 2  Николай Каманинов - 3');
let score = 0;

  if (capital == 2)
    score += 2;
  if (firstConstitution == 3)
    score += 2;
  if (firstAstronaut == 1)
    score += 2;
  alert('Ваши балы: ' + score);
