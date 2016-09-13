
personList = [];

function hotornot (person, score) {
  this.person = person;
  this.score = score;
  personList.push(this);

  var global = 'Im global';

};

new hotornot ('Jennifer', 10);
new hotornot ('Jessica', 8);
new hotornot ('Nicole', 3);

console.log(global);
