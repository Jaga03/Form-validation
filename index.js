function validataform() {
    let isValid = true;

    
    document.querySelectorAll('.error').forEach(item => item.textContent = '');

    
    const name = document.getElementById('name').value;
    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    
    const mobile = document.getElementById('mobile').value;
    const mobilePattern = /^[789]\d{9}$/;
    if (!mobile) {
        document.getElementById('mobileError').textContent = 'Mobile number is required.';
        isValid = false;
    } else if (!mobilePattern.test(mobile)) {
        document.getElementById('mobileError').textContent = 'Mobile number is invalid. It should be 10 digits long.';
        isValid = false;
    }

    
    const email = document.getElementById('email').value;
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'Email is invalid.';
        isValid = false;
    }

    
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.';
        isValid = false;
    }

    
    const address = document.getElementById('address').value;
    if (!address) {
        document.getElementById('addressError').textContent = 'Address is required.';
        isValid = false;
    }

   
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        alert('You must agree to the terms of service.');
        isValid = false;
    }

   
    if (isValid) {
        document.getElementById('success').textContent = 'Registration successful!';
    }
}

function showpassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}
