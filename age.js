document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dobInput = document.getElementById('dob').value;
    const today = new Date();

    if (!dobInput) {
        alert('Please select a valid date.');
        return;
    }

    const dob = new Date(dobInput);

   //chek age is valid or not
    if (dob > today) {
        alert('Date of Birth cannot be in the future. Please select a valid date.');
        return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }
  // show the result
    document.getElementById('result').innerHTML = `
        <p><strong>Your Age Till Today:</strong></p>
        <p><strong>${years}</strong> Years</p>
        <p><strong>${months}</strong> Months</p>
        <p><strong>${days}</strong> Days</p>
    `;
});