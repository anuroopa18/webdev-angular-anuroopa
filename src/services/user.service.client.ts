export class UserServiceClient {

    findUserById(userId) {
        return fetch('http://localhost:3000/api/user/' + userId, {
            credentials: 'include'
        })
            .then(response => response.json());
    }


    findUserByUsername(username) {
        return fetch('http://localhost:3000/api/users/' + username, {
            credentials: 'include'
        })
        .then(response => response.json());
    }

    login(username, password) {
        const credentials = {
            username: username,
            password: password
        }
        return fetch('http://localhost:3000/api/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }

        }).then(response => response.json());
    }
    logout() {
        return fetch('http://localhost:3000/api/logout', {
            method: 'post',
            credentials: 'include'
        })
    }
    profile() {
        return fetch('http://localhost:3000/api/profile', {
            credentials: 'include'
        })
            .then(response => response.json());
    }

    createUser(username, password, password2) {
        const user = {
            username: username,
            password: password,
        };
        return fetch('http://localhost:3000/api/user', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    }


    
    update(username, firstName, lastName, email, phone, address) {
        const user = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            address: address

        };

        return fetch('http://localhost:3000/api/user', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        });
    
    
      



    }
}