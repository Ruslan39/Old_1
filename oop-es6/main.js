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
            console.log(`Атака оружием "${this.name}" - 0 ед.`);
        } else if (this.durability === Infinity) {
            console.log(`Атака оружием "${this.name}" - ${this.attack} ед.`);
        } else if (this.durability < (this.originalDurability * 0.3)) {
            console.log(`Атака оружием "${this.name}" - ${this.attack / 2} ед.`);
        } else {
            console.log(`Атака оружием "${this.name}" - ${this.attack} ед.`);
        }
    }

    isBroken() {
        if (this.durability > 0) {
            console.log(false);
            return false;
        } else {
            console.log(true);
            return true;
        }
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
    constructor() {
        super({name: 'Лук', attack: 10, durability: 200, range: 3});
    }
    name = 'Длинный лук';
    attack = 15;
    range = 4;
}

class Poleaxe extends Sword {
    constructor() {
        super({name: 'Меч', attack: 25, durability: 500, range: 1});
    }
    name = 'Секира';
    attack = 27;
    durability = 800;
}

class StormCrosier extends Crosier {
    constructor() {
        super({name: 'Посох', attack: 8, durability: 300, range: 2});
    }
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
                
        if (grade === 1 || grade === 2 || grade === 3 || grade === 4 || grade === 5) {
            this.Grades[subject].push(grade);
        } else {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        }        

        return `Всего оценок по предмету "${subject}": ${this.Grades[subject].length}`;
    }

    getAverageBySubject(subject) {
        if (this.Grades[subject] === undefined || this.Grades[subject] == 0) {
            return `~~~ По предмету ${subject} оценок нет`;
        }

        let sumGrades = 0;

        for (let grade in this.Grades[subject]) {
            sumGrades += this.Grades[subject][grade];
        }
        
        const averageBySubject = sumGrades / this.Grades[subject].length;

        return `~~~ Средняя оценка по предмету "${subject}": ${averageBySubject}`;
    }

    getTotalAverage() {
        let sumTotalGrades = 0;
        let gradesAmount = 0

        for (let subject in this.Grades) {
            for (let grade in this.Grades[subject]) {
                sumTotalGrades += this.Grades[subject][grade];
                gradesAmount++;
            }
        }

        if (sumTotalGrades === 0 || gradesAmount === 0) {
            return `~~~~~~ По всем предметам оценок нет`;
        }

        const totalAverage = sumTotalGrades / gradesAmount;

        return `~~~~~~ Средняя оценка по всем предметам: ${totalAverage}`;    
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