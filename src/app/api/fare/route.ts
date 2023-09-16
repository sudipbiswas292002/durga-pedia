// bus fare
function busfare(distance: number) {
  //let time = Date.getHours();
  let fare = 0;
  if (distance < 3) fare= 8;
  else if (distance > 3 && distance < 7) fare= 10;
  else if (distance > 7 && distance < 12) fare= 12;
  else if (distance > 10 && distance < 15) fare= 15;
  else {
    if (distance > 15) {
      fare = fare+ 15;
      busfare(distance - 15);
    }
  }
  return fare;
}
// uber fare
function uberfare(distance: number, cartype: string) {
  let fare = 0;
  if (cartype == 'pool' || cartype == 'ubergo') {
    fare = 48 + (9 * distance);
    if (fare < 63)
      fare = 63;
  }
  else if (cartype == 'uberxl') {
    fare = 69 + (16 * distance);
    if (fare < 105)
      fare = 105;
  }
  else if (cartype == 'premier') {
    fare = 53 + (10 * distance);
    if (fare < 79)
      fare = 79;
  }
  else if (cartype == 'taxi') {
    fare = 50 + (16 * distance);
    if (fare < 32)
      fare = 32;
  }  
  return fare;
}
// fare in array format
function getfare() {
  const allfare = [busfare(50), uberfare(50, 'taxi')];
  return allfare;
}

