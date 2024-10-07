const exercises = [
  `Push-ups`,
  `Sit-ups`,
  `Bear Crawls`,
  `1 mile run`,
  `60 second plank`,
  `Burpees`,
  `Jumping Jacks`,
  `Weighted Squats`,
  `Inch Worms`,
];

const randomExerciseGenerator = (number) => {
    for (let i = 0; i < number; i++) {
        const indx = Math.floor(Math.random() * exercises.length);
        console.log(exercises[indx]);       
    }

    const moreLess = number > exercises.length ? `didesnis` : number < exercises.length ? `mažesnis` : `lygus`

    return `Paduotas skaičius yra ${moreLess} nei masyve esančių elementų skaičius`
}

console.log(randomExerciseGenerator(4));
console.log(randomExerciseGenerator(9));
console.log(randomExerciseGenerator(10));
