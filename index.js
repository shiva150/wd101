document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const table = document.getElementById('userData');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const dob = document.getElementById('dob').value;
        const terms = document.getElementById('terms').checked;

        // Validate date of birth
        const dobDate = new Date(dob);
        const today = new Date();
        const minDate = new Date(today);
        minDate.setFullYear(today.getFullYear() - 55);
        const maxDate = new Date(today);
        maxDate.setFullYear(today.getFullYear() - 18);

        if (dobDate < minDate || dobDate > maxDate) {
            alert('Please enter a valid date of birth between 18 and 55 years.');
            return;
        }

        // Add data to the table
        const newRow = table.insertRow(1);
        newRow.insertCell(0).innerHTML = name;
        newRow.insertCell(1).innerHTML = email;
        newRow.insertCell(2).innerHTML = password;
        newRow.insertCell(3).innerHTML = dob;
        newRow.insertCell(4).innerHTML = terms ? 'Yes' : 'No';

        // Clear the form
        form.reset();
    });
});
