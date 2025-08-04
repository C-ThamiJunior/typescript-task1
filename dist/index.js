"use strict";
const employee1 = {
    fullName: ["Thami", "Luhlanga"],
    age: 24,
    department: "ICT",
    skills: ["TypeScript", "React"],
    isActive: true,
};
const employee2 = {
    fullName: ["Cheriton", "Ubisi"],
    age: 25,
    department: "Software",
    skills: ["Java", "Spring"],
    isActive: false,
};
function logEmployee(employee) {
    const firstName = employee.fullName[0];
    const lastName = employee.fullName[1];
    console.log(`--- Employee Details ---`);
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${employee.age}`);
    console.log(`Department: ${employee.department}`);
    console.log(`Skills: ${employee.skills}`);
    console.log(`Active: ${employee.isActive ? "Yes" : "No"}`);
}
logEmployee(employee1);
logEmployee(employee2);
