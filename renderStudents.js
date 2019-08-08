
function renderStudents(students) {
		
	function attendance (student) {
	return `
    <div class="text-center mt-5">
			<div class="containerStudents">
				<h1>Roll Call!</h1>
				<div class="studentList">
					<div class="student">${student.name}</div>
				</div>
			</div>
    </div>
		`
	}
	let rollCall = students.map(attendance)

	return rollCall
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

    content.innerHTML = renderStudents(studentsAbstraction);
}