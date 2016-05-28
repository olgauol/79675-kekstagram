function getMessage(a, b){
  var typeOfA = typeof a;
  var sumA = 0;
  var squareAB = 0;
  if (typeOfA == 'boolean') {
    if (a == true) {
      return 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
    } else {
    return 'Переданное GIF-изображение не анимировано';
    }
  } 
  else if (typeOfA == 'number') {
    return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + (b * 4) + ' атрибутов';
  } 
  else if (Array.isArray(a)) {
    if (Array.isArray(b)) {
      for (var i = 0; i < b.length; i++) {
        squareAB += a[i] * b[i];
      }
    return 'Общая площадь артефактов сжатия: ' + squareAB;
    } 
    else {
      for (var i = 0; i < b.length; i++) {
        sumA += a[i];
      }
      return 'Количество красных точек во всех строчках изображения: ' + sumA;
    } 
  }
}