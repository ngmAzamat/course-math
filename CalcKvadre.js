const a = process.argv[2];
const b = process.argv[3];
const c = process.argv[4];
const Discriminant = b ** 2 - 4 * a * c;
console.log("Дискриминант:", Discriminant);
const FirstAnswer = (-1 * b + Math.sqrt(Discriminant)) / (2 * a);
const SecondAnswer = (-1 * b - Math.sqrt(Discriminant)) / (2 * a);
console.log("Первый Ответ:", FirstAnswer);
console.log("Второй Ответ:", SecondAnswer);
