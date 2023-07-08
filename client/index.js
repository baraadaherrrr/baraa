function GetAllStudents()
{
    fetch('http://localhost:3000/getAllstudents')
        .then(response => response.json())
        .then(json => {
            let studentsUL = document.getElementById('students');
            json.forEach(e=> {
                let singlstudentLI =  document.createElement('li');
                singlstudentLI.innerHTML = e.name;
                studentsUL.appendChild(singlstudentLI);
            });
        })
}
