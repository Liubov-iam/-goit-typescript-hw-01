enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

// Приклади використання
console.log(isWeekend(DayOfWeek.Monday));    
console.log(isWeekend(DayOfWeek.Saturday));  