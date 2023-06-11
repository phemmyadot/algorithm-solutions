let cars = [
  { id: 1, price: 100 },
  { id: 2, price: 100 },
  { id: 3, price: 100 },
];

const incrementPrice = (id) =>
  (cars = cars.map(
    (car) =>
      (car = { ...car, price: car.id === id ? car.price + 100 : car.price })
  ));
incrementPrice(1);
incrementPrice(1);
incrementPrice(1);
incrementPrice(1);
incrementPrice(1);
console.log(cars);
