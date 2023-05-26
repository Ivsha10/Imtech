import Header from './Header';
import { useState, useEffect } from "react";

const SignUp = ({isClicked, setUser, message, setMessage }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const error1 = 'Please enter first name';
    const error2 = 'Please enter last name';
    const error3 = 'Please enter email address';
    const error4 =  'Please enter a valid password';
    const error5 = 'Email address is already used';
    const message1= 'Registered Succesfully';

    const handleRegister = (e) => {
        if (firstName.length > 1 && lastName.length > 1 && email.length > 6 && password.length  > 8) {

            setUser({ firstName: firstName, lastName: lastName, email: email, password: password});
            setMessage(message1);

        }
        else {
            e.preventDefault();
            if (firstName.length < 2) {
                setMessage(error1);
            }
            else if (lastName.length < 2) {
                setMessage(error2);
            }
            else if (email.length < 10) {
                setMessage(error3);
            }
            else if(password.length < 8)
            {
                setMessage(error4)
            }

        }

    }



    return (
        !isClicked &&
        <main>
            <form onSubmit={(e) => { e.preventDefault() }}>
              <Header title={'Registration Form'}/>
                <input type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                /> <br />
                {message === error1 &&

                    <label style={{ fontSize: '0.75em', color: 'red' }}>{message}</label>

                }
                <input type="text"
                    required
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => { setLastName(e.target.value) }}
                /> <br />
                {message === error2 &&

                    <label style={{ fontSize: '0.75em', color: 'red' }}>{message}</label>

                }
                <input type="text"
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                /> <br />
                {message === error3 &&

                    <label style={{ fontSize: '0.75em', color: 'red' }}>{message}</label>

                }
                <input type="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                /> <br />
                {message === error4 &&

                    <label style={{ fontSize: '0.75em', color: 'red'}}>{message}</label>

                }   

                <button className = 'registerBtn' type="submit" onClick={(e) => handleRegister(e)}>Register</button> <br/>
                {(message === error5 || message===message1) &&   
                    <div className="labelMessage">{message}</div>
                }
            </form>
        </main>
    )
}

export default SignUp
