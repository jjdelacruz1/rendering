
// function myMap(arr, fn) {
// 	let acc = [];
// 	for (let index = 0; index < arr.length; index++) {
// 		const element = arr[index];
// 		acc.push(fn(element));
// 	}
// 	return acc;
// }

function attendance (student) {
	let isPresent = student.isPresent;
	let string = "";
	let className = "";
	
	if (isPresent){
		string = "Present";
		className = "student-green";
	} else {
		string = "Absent"
		className = "student-red"
	}

	return `<div class="student ${className}">
						<div class="name">${student.name}</div>
						<div>${string}</div>
					</div>`
	
}

function renderStudents(students) {
		let newStudentsArr = students.map(attendance);
		let studentsString = newStudentsArr.join("");

		let final = `<div class='parent'>
									<h1>Roll Call!</h1>
									${studentsString}
								</div>`;
		return final;
}

	
function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]
		let studentsDivs = renderStudents(studentsAbstraction);
    content.innerHTML = studentsDivs
}