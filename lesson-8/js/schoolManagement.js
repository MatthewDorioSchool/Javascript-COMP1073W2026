/* =========================================
   MINI PROJECT: STUDENT MANAGEMENT SYSTEM
========================================= */

// STUDENT CONSTRUCTOR
function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}

// METHODS
Student.prototype.getInfo = function () {
    return `${this.name} (Age :${this.age}) - Grade: ${this.grade}`;
};

Student.prototype.isPass = function () {
    return this.grade >=50;
};

Student.prototype.updateGrade = function (newGrade) {
    if(newGrade <0 || newGrade >100) return "Invalid Grade"
    this.grade = newGrade
    return "Grade updated";
};


// COURSE CONSTRUCTOR
function Course(title) {
    this.title = title;
    this.students = [];
}

// METHODS
Course.prototype.addStudent = function (student) {
    const exists = this.students.some(s=> s.name === student.name);
    if (exists) return "Student already added";
    this.students.push(student);
    return "Student added";
};

Course.prototype.listStudents = function () {
    if (this.students.length === 0) return "No students";
    return this.students.map(s=>s.getInfo()).join("\n") ;
};

Course.prototype.getAverage = function () {
    if (this.students.length === 0) return 0;
    const total = this.students.reduce((sum,s) => sum + s.grade,0);
    return (total / this.students.length).toFixed(2);
};

/* 
[
{name:"A",grade:70,
name:"B", grade :80
}
)sum = 0+70
sum = 7+ 80
total = 150 
]
*/

// SCHOOL CONSTRUCTOR
function School(name) {
    this.name = name;
    this.courses = [];
}

// METHODS
School.prototype.addCourse = function (course) {
    const exists = this.courses.some(c => c.title === course.title);
    if (exists) return "Course already exists";

    this.courses.push(course);
    return "Course added";
};

School.prototype.listCourses = function () {
    if (this.courses.length === 0) return "No courses";

    return this.courses.map(c => `${c.title} - Students: ${c.students.length}`).join("\n");
};

School.prototype.findStudent = function (name) {
    for (let course of this.courses) {
        const student = course.students.find(s => s.name === name);
        if (student) {
            return {
               course: course.title,
               info: student.getInfo(),
               pass: student.isPass
            };
        }
    }
    return "Student not found";
};


// TEST AREA



