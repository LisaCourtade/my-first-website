// const username = document.getElementById('username').value;
// const password = document.getElementById('password').value;

function clickLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const body = document.getElementsByClassName('form-cont')[0];
    console.log(username, password)
    if (checkUserdata(users, username, password)) {
        body.innerHTML = '<div>Sucessfully logged in.<div/>';
    } else {
        body.innerHTML = '<div>Failed to log in.<div/>';
    }
}

function checkUserdata(users, name, pword) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === name) {
            if (users[i].password === pword) {
                return true
            }
        }

    }
    return false;
}

const users = [
    {
        username: 'jack',
        password: 'fiji10'
    },
    {
        username: 'leila',
        password: '2020too'
    },
    {
        username: 'tao',
        password: 'dragon00'
    },
    {
        username: 'daniela',
        password: 'azerty'
    },
    {
        username: 'Pete',
        password: 'soldier'
    }
];

function clickRegister() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    users.push({
        username: newUsername,
        password: newPassword
    })
}




function goHome() {
    window.location.href = '/website/index.html'
}

function goRegister() {
    window.location.href = '/website/register.html'
};

function goLogin() {
    window.location.href = '/website/login.html'
}




class Auth {

    users = [
        {
            username: 'jack',
            password: 'fiji10'
        },
        {
            username: 'leila',
            password: '2020too'
        },
        {
            username: 'tao',
            password: 'dragon00'
        },
        {
            username: 'daniela',
            password: 'azerty'
        },
        {
            username: 'Pete',
            password: 'soldier'
        }
    ];

    getUsers() {
        return this.users;
    }

    checkUserdata(name, pword) {
        for (let i = 0; i < users.length; i++) {
            if (this.users[i].username === name) {
                if (this.users[i].password === pword) {
                    return true
                }
            }
    
        }
        return false;
    }

    clickLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const body = document.getElementsByClassName('form-cont')[0];
        if (this.checkUserdata(username, password)) {
            body.innerHTML = '<div>Sucessfully logged in.<div/>';
        } else {
            body.innerHTML = '<div>Failed to log in.<div/>';
        }
    }

    clickRegister() {
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;
        this.users.push({
            username: newUsername,
            password: newPassword
        })
        console.log(newUsername, newPassword, this.users)
    }
}

const auth = new Auth();

// const auths = []

// for(let i = 0; i < 100; i++) {
//     auths[i] = new Auth();
// }

// auths[0].users.push({
//     username: 'Eigminas',
//     password: 'Slavinskas',
// })
// console.log(auths)