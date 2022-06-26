//1) Создать класс разработчик, у которого будут свойства: имя, язык программирования, метод, который в консоль выводит фразу " "имя" работает с "язык программирования" " А также класс студента, который будет расширен с помощью класса разработчика. Добавьте туда свойство: номер группы

class Programmer {
    constructor(options) {
        this.name = options.name,
            this.languge = options.languge
    }

    informationAboutProgrammer() {
        console.log(`${name} работаю с ${languge}`);
    }
}
let jsProgrammer = new Programmer({ name: "John", languge: "JS" });

class Student extends Programmer {
    constructor(options) {
        super(options)
        this.number = options.number
    }


}
let newStudent = new Student({ name: "Biakyia", languge: "c++", number: '1' })

//2) Написать метод, который будет к строкам добавлять восклицательный знак в конце
class addQuestion {
    constructor(options) {
        this.str = options.str
        alert(str + '!');
    }

}

//3) Написать метод, который будет делить число на два
class devideTwo {
    constructor(options) {
        this.number = options.number;
        alert(number / 2);
    }

}