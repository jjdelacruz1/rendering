function buildStudentHTML (student) {
	let attendanceLabel = "";
	let className = "";
	
	if (student.isPresent){
		attendanceLabel = "Present";
		className = "student-green";
	} else {
		attendanceLabel = "Absent"
		className = "student-red"
	}

	return `<div class="student ${className}">
						<div class="name">${student.name}</div>
						<div>${attendanceLabel}</div>
					</div>`
	
}

function buildStudentsHTML (students) {
		let studentsHTMLArray = students.map(buildStudentHTML);
		let studentsHTMLStr = studentsHTMLArray.join("");

		return `<div class='parent'>
									<h1>Roll Call!</h1>
									${studentsHTMLStr}
								</div>`
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
    content.innerHTML = buildStudentsHTML(studentsAbstraction)
}