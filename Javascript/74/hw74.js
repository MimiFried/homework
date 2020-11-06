(function () {
    'use strict';

    function Student(firstName, lastName, age, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grade = grade;
    }

    const studentA = new Student('Joe', 'Brown', 16, 11);
    const studentB = new Student('Jack', 'Green', 16, 11);
    const studentC = new Student('Jeff', 'Gold', 16, 11);

    let class1 = [studentA, studentB, studentC];

    function printStudents(lastFirst, ...students) {
        students.forEach(student => {
            if (lastFirst) {
                console.log(`${student.lastName}, ${student.firstName}`);
            } else {
                console.log(`${student.firstName}, ${student.lastName}`);
            }
        }
        );
    }
    printStudents(true, ...class1);

    function copyStudent(student){
        const {firstName, lastName, ...rest} = student;
        return {
            firstName: lastName,
            lastName: firstName,
            ...rest
        };
    }

    console.log(copyStudent(studentA));
    } ());