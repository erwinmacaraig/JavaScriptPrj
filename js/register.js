class Registrar {
    
    registerUser() {
        if (!this.checkInputs()) {
            let user = new User();
            const formFields = document.querySelectorAll('.form-control');
            user.name = formFields[0].value;
            user.lname = formFields[1].value;
            user.mail = formFields[2].value;
            user.passwd = formFields[3].value;
            console.log(JSON.stringify(user));

            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://fir-fb-db-a6d4f-default-rtdb.asia-southeast1.firebasedatabase.app/users.json');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onreadystatechange = function () {
                if (xhr.status == 200 && xhr.readyState == 4) {
                    document.getElementsByClassName('needs-validation')[0].reset();
                }
            }
            xhr.send(JSON.stringify(user));

        } else { 
            return false;
        }
    }

    loadAllUsers() { 
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://fir-fb-db-a6d4f-default-rtdb.asia-southeast1.firebasedatabase.app/users.json');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.status == 200 && xhr.readyState == 4) {
                console.log(JSON.parse(xhr.responseText));
                const response = JSON.parse(xhr.responseText);
                let systemUsers = [];
                for (let user in response) { 
                    systemUsers.push(response[user]);
                }
                // store to local storage
                localStorage.setItem('users', JSON.stringify(systemUsers));
            }
        }
        xhr.send();

    }

    checkInputs() {
       // get submitted fields
        let hasError = false;
        let formFields = document.querySelectorAll('.form-control');
        console.log(hasError);
        
        if (formFields[0].checkValidity()) {
            document.querySelector('#validationFirstname').classList.remove('invalid-feedback');
            formFields[0].classList.remove('is-invalid');
           
        } else {
            document.querySelector('#validationFirstname').classList.add('invalid-feedback');
            formFields[0].classList.add('is-invalid');  
           hasError = true;
        }

        if (formFields[1].checkValidity()) {
            document.querySelector('#validationLastname').classList.remove('invalid-feedback');
            document.querySelector('#lastname').classList.remove('is-invalid');
            
        } else {
            document.querySelector('#validationLastname').classList.add('invalid-feedback');
            document.querySelector('#lastname').classList.add('is-invalid');
           hasError = true;
        }
        if (formFields[2].value.indexOf('@') == -1) {
            formFields[2].classList.add('is-invalid');
            document.querySelector('#validationEmail').classList.add('invalid-feedback');
           hasError = true;
        } else {
            formFields[2].classList.remove('is-invalid');
            document.querySelector('#validationEmail').classList.remove('invalid-feedback');
           
        }
        if (formFields[3].checkValidity()) {
            formFields[3].classList.remove('is-invalid')
        } else {
            formFields[3].classList.add('is-invalid')
           hasError = true;
        }
        if (formFields[4].checkValidity()) {
            formFields[4].classList.remove('is-invalid')
        } else {
            formFields[4].classList.add('is-invalid')
           hasError = true;
        }
        if (formFields[3].checkValidity() && formFields[3].checkValidity()) {
            if (formFields[3].value != formFields[4].value) {
                document.querySelectorAll('input[type="password"]').forEach(function (el) {
                    el.classList.add('is-invalid');
                })
                document.getElementById('validationPasswordMatch').classList.remove('valid-feedback');
                document.getElementById('validationPasswordMatch').classList.add('invalid-feedback');
                hasError = true;
            } else {
                document.querySelectorAll('input[type="password"]').forEach(function (el) {
                    el.classList.remove('is-invalid');
                })
                document.getElementById('validationPasswordMatch').classList.remove('invalid-feedback');
                document.getElementById('validationPasswordMatch').classList.add('valid-feedback');
                
            }
        }
        return hasError;
    }

    loginUser() { 
        const userEmail = document.getElementById('email').value.trim();
        const userPassword = document.getElementById('inputPassword1').value.trim();

        // loop through the array
        const userListing = Array.from(JSON.parse(localStorage.getItem('users')));
        const authUser = userListing.filter(function (user) { 
            return userEmail == user.email && userPassword == user.password
        })[0];

        if (authUser) {
            sessionStorage.setItem('authUser', JSON.stringify(authUser));
            window.location.href = '../products.html';
        } else { 
            alert('Wrong email or password');
        }

    }

}

class User { 
    constructor(firstName, lastName, email, password) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    set name(firstName) { 
        this.firstName = firstName;
    }
    get name() { 
        return this.firstName;
    }

    set lname(lastName) {
        this.lastName = lastName;
    }
    get lname() { 
        return this.lastName;
    }

    set mail(email) { 
        this.email = email;
    }
    get mail() { 
        return this.email
    }

    set passwd(passwd) { 
        this.password = passwd;
    }
    get passwd() { 
        return this.password;
    }
    

}



let registrar = new Registrar();






