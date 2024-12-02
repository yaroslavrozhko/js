// Enum для опису статусів, типів курсів, семестрів, оцінок та факультетів
enum StudentStatus {
    Active = "Active",
    Academic_Leave = "Academic_Leave",
    Graduated = "Graduated",
    Expelled = "Expelled"
}

enum CourseType {
    Mandatory = "Mandatory",
    Optional = "Optional",
    Special = "Special"
}

enum Semester {
    First = "First",
    Second = "Second"
}

enum GradeValue {
    Excellent = 5,
    Good = 4,
    Satisfactory = 3,
    Unsatisfactory = 2
}

enum Faculty {
    Computer_Science = "Computer_Science",
    Economics = "Economics",
    Law = "Law",
    Engineering = "Engineering"
}

// Інтерфейси
interface Student {
    id: number;
    fullName: string;
    faculty: Faculty;
    year: number;
    status: StudentStatus;
    enrollmentDate: Date;
    groupNumber: string;
}

interface Course {
    id: number;
    name: string;
    type: CourseType;
    credits: number;
    semester: Semester;
    faculty: Faculty;
    maxStudents: number;
}

interface Grade {
    studentId: number;
    courseId: number;
    grade: GradeValue;
    date: Date;
    semester: Semester;
}

// Реалізація UniversityManagementSystem
class UniversityManagementSystem {
    private students: Student[] = [];
    private courses: Course[] = [];
    private grades: Grade[] = [];
    private studentCounter = 1; // Унікальний ідентифікатор студента
    private courseRegistrations: { [courseId: number]: number[] } = {}; // Список студентів для кожного курсу

    // Метод для зарахування студента
    enrollStudent(student: Omit<Student, "id">): Student {
        const newStudent: Student = { id: this.studentCounter++, ...student };
        this.students.push(newStudent);
        return newStudent;
    }

    // Реєстрація студента на курс
    registerForCourse(studentId: number, courseId: number): void {
        const student = this.students.find(s => s.id === studentId);
        const course = this.courses.find(c => c.id === courseId);

        if (!student || !course) {
            throw new Error("Student or course not found.");
        }

        if (student.faculty !== course.faculty) {
            throw new Error("Student cannot register for a course of another faculty.");
        }

        if (!this.courseRegistrations[courseId]) {
            this.courseRegistrations[courseId] = [];
        }

        if (this.courseRegistrations[courseId].length >= course.maxStudents) {
            throw new Error("Course is full.");
        }

        this.courseRegistrations[courseId].push(studentId);
    }

    // Встановлення оцінки студенту
    setGrade(studentId: number, courseId: number, grade: GradeValue): void {
        if (!this.courseRegistrations[courseId]?.includes(studentId)) {
            throw new Error("Student is not registered for this course.");
        }

        const course = this.courses.find(c => c.id === courseId);
        if (!course) {
            throw new Error("Course not found.");
        }

        this.grades.push({
            studentId,
            courseId,
            grade,
            date: new Date(),
            semester: course.semester
        });
    }

    // Оновлення статусу студента
    updateStudentStatus(studentId: number, newStatus: StudentStatus): void {
        const student = this.students.find(s => s.id === studentId);
        if (!student) {
            throw new Error("Student not found.");
        }

        if (student.status === StudentStatus.Graduated || student.status === StudentStatus.Expelled) {
            throw new Error("Cannot update status for graduated or expelled students.");
        }

        student.status = newStatus;
    }

    // Отримання студентів за факультетом
    getStudentsByFaculty(faculty: Faculty): Student[] {
        return this.students.filter(s => s.faculty === faculty);
    }

    // Отримання оцінок студента
    getStudentGrades(studentId: number): Grade[] {
        return this.grades.filter(g => g.studentId === studentId);
    }

    // Отримання доступних курсів для факультету та семестру
    getAvailableCourses(faculty: Faculty, semester: Semester): Course[] {
        return this.courses.filter(c => c.faculty === faculty && c.semester === semester);
    }

    // Обчислення середньої оцінки студента
    calculateAverageGrade(studentId: number): number {
        const studentGrades = this.getStudentGrades(studentId);
        if (studentGrades.length === 0) return 0;

        const total = studentGrades.reduce((sum, grade) => sum + grade.grade, 0);
        return total / studentGrades.length;
    }

    // Отримання списку відмінників за факультетом
    getTopStudentsByFaculty(faculty: Faculty): Student[] {
        return this.students
            .filter(s => s.faculty === faculty)
            .filter(s => {
                const avgGrade = this.calculateAverageGrade(s.id);
                return avgGrade >= 4.5; // Відмінник - середній бал >= 4.5
            });
    }
}

// Приклад використання:
// const ums = new UniversityManagementSystem();
// const student = ums.enrollStudent({ fullName: "John Doe", faculty: Faculty.Computer_Science, year: 1, status: StudentStatus.Active, enrollmentDate: new Date(), groupNumber: "CS-101" });
// console.log(student);
