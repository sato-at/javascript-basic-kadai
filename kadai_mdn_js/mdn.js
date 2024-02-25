const date = new Date();
const [year, Month, day] = [
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
];

console.log(year + '年' + (Month + 1) + '月' + day + '日');
