const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);



const objeto = (object, key, value) => {
  object[key] = value
  console.log(object)
}

let objetoa = {nome: "Fabiano", idade: 31}

objeto(objetoa, "sobrenome", "Emiliano")



const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};



for (let i in student1){
  console.log(i, student1[i])
}



const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(i in arrayOfSkills){
    console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);


const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsWithFor(student));

// Com Object.values
console.log(listSkillsWithValues(student));



const países = {
  França: "Paris",
  Brasil: "Brasilia",
  Espanha: "Madrid",
  Portugual: "Lisboa"
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);