'use strict';


////////////////////////////////// Задание №1 //////////////////////////////////
console.log(`\nЗадание №1\n `)


class Weapon {
    constructor({name, attack, durability, range}) {
        this.name = name;
        this.attack = +attack;
        this.durability = +durability;
        this.originalDurability = +durability;
        this.range = +range;
    }

    takeDamage(damage) {
        if ( (this.durability > 0) && (this.durability - damage > 0) ) {
            this.durability -= damage;
            console.log(`Прочность оружия "${this.name}" - ${this.durability} ед.`);            
        } else {
            console.log(`Оружие "${this.name}" сломано!`);
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability === 0) {
            return 0;
        } else if (this.durability === Infinity) {
            return this.attack;
        } else if (this.durability < (this.originalDurability * 0.3)) {
            return (this.attack / 2);
        } else {
            return this.attack;
        }
    }

    isBroken() {
        return !(this.durability > 0);
    }
}

class improvedWeapon extends Weapon {}

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
  });

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

const sword = new Weapon({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1,
});

const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
});

const crosier = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});


const longBow = new improvedWeapon({
    name: 'Длинный Лук',
    attack: 15,
    durability: 200,
    range: 4,
  });
  
const poleaxe = new improvedWeapon({
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: 1,
});

const stormCrosier = new improvedWeapon({
    name: 'Посох Бури',
    attack: 10,
    durability: 300,
    range: 3,
});

sword.takeDamage(250);
sword.getDamage();
sword.takeDamage(101);
sword.getDamage();
sword.isBroken();
sword.takeDamage(149);
sword.isBroken();
sword.getDamage();
sword.takeDamage(150);

arm.getDamage();
arm.takeDamage(200);
arm.isBroken();


////////////////////////////////// Задание №2 //////////////////////////////////
console.log(`\nЗадание №2\n `)


class Arm extends Weapon {
    constructor() {
        super({name: 'Рука', attack: 1, durability: Infinity, range: 1});
    }
}

class Bow extends Weapon {
    constructor() {
        super({name: 'Лук', attack: 10, durability: 200, range: 3});
    }
}

class Sword extends Weapon {
    constructor() {
        super({name: 'Меч', attack: 25, durability: 500, range: 1});
    }
}

class Knife extends Weapon {
    constructor() {
        super({name: 'Нож', attack: 5, durability: 300, range: 1});
    }
}

class Crosier extends Weapon {
    constructor() {
        super({name: 'Посох', attack: 8, durability: 300, range: 2});
    }
}


class LongBow extends Bow {
    name = 'Длинный лук';
    attack = 15;
    range = 4;
}

class Poleaxe extends Sword {
    name = 'Секира';
    attack = 27;
    durability = 800;
}

class StormCrosier extends Crosier {
    name = 'Посох Бури';
    attack = 10;
    range = 3;
}


const arm1 = new Arm();
const bow1 = new Bow();
const sword1 = new Sword();
const knife1 = new Knife();
const crosier1 = new Crosier();

const longBow1 = new LongBow();
const poleaxe1 = new Poleaxe();
const stormCrosier1 = new StormCrosier();

console.log(bow1.name);
console.log(bow1.attack);
console.log(bow1.durability);
console.log(bow1.range);

console.log(arm1);

console.log(longBow1);
console.log(stormCrosier1);

console.log(`\n `)

poleaxe1.takeDamage(560);
poleaxe1.getDamage();
poleaxe1.takeDamage(220);
poleaxe1.isBroken();
poleaxe1.getDamage();
poleaxe1.takeDamage(200);
poleaxe1.isBroken();
poleaxe1.getDamage();


////////////////////////////////// Задание №3 //////////////////////////////////
console.log(`\nЗадание №3\n `)


class StudentLog {
    constructor(name) {
        this.name = name;
        this.Grades = {};
    }
    
    getName(name) {
        return this.name;
    }

    addGrade(grade, subject) {
        if (this.Grades[subject] === undefined) {
            this.Grades[subject] = [];
        }            
                
        if (grade >=1 && grade <= 5) {
            this.Grades[subject].push(grade);
        } else {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        }        

        return this.Grades[subject].length;
    }

    getAverageBySubject(subject) {
        if (this.Grades[subject] === undefined || this.Grades[subject] == 0) {
            return 0;
        }

        let sumGrades = 0;

        for (let grade in this.Grades[subject]) {
            sumGrades += this.Grades[subject][grade];
        }
        
        const averageBySubject = sumGrades / this.Grades[subject].length;

        return averageBySubject;
    }

    getTotalAverage() {
        let sumTotalGrades = 0;
        let subjectAmount = 0;

        for (let subject in this.Grades) {
            sumTotalGrades += this.getAverageBySubject(subject);
            subjectAmount++;
        }

        if (sumTotalGrades === 0) {
            return 0;
        }

        const totalAverage = sumTotalGrades / subjectAmount;

        return totalAverage;
    }

}

const log = new StudentLog('Олег Никифоров');

console.log(log.getName());

console.log(log.addGrade(2, 'algebra'));
console.log(log.addGrade(6, 'algebra'));
console.log(log.addGrade('Круто!', 'algebra'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(4, 'geometry'));

console.log(log.getAverageBySubject('geometry'));
console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('math'));

console.log(log.getTotalAverage());