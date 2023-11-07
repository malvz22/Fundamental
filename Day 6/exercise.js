class Student {
  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

const udin = new Student("Udin", "udin@mail.com", 24, 80);
const adan = new Student("Adan", "adin@mail.com", 25, 77);
const idin = new Student("Idin", "idin@mail.com", 21, 71);

// console.log(udin, adan, idin);

const students = [];
students.push(udin, idin, adan);

const resultFunc = (students) => {
  let scoreArr = [];
  let ageArr = [];

  students.map((value) => {
    scoreArr.push(value.score);
    ageArr.push(value.age);
  });

  scoreArr.sort();
  ageArr.sort();

  console.log(ageArr);

  let avgScore = Math.floor(
    scoreArr.reduce((avgScore, value) => (avgScore += value), 0) /
      scoreArr.length
  );

  let avgAge = Math.floor(
    ageArr.reduce((avgAge, value) => (avgAge += value), 0) / ageArr.length
  );

  //   `Highest: ${}, Lowest:}, Average: ${avgScore}`

  const result = {
    score: {
      highest: `${scoreArr[scoreArr.length - 1]}`,
      lowest: ` ${scoreArr[0]}`,
      average: `${avgScore}`,
    },
    age: {
      highest: `${ageArr[ageArr.length - 1]}`,
      lowest: `${ageArr[0]}`,
      average: `${avgAge}`,
    },
  };

  console.log(result);
};

resultFunc(students);
