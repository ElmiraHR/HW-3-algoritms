function hanoiTower(n, source, auxiliary, destination) {
    if (n === 1) {
      console.log(`Переместите диск 1 с ${source} на ${destination}`);
      return;
    }
    hanoiTower(n - 1, source, destination, auxiliary);
    console.log(`Переместите диск ${n} с ${source} на ${destination}`);
    hanoiTower(n - 1, auxiliary, source, destination);
  }
  
  // Пример вызова для 3 дисков:
  hanoiTower(3, "левый", "средний", "правый");
  