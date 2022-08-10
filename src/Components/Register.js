import React, {useState} from "react";
import {Form} from "react-bootstrap";
import validator from "validator/es";

export default function Register () {
    const [register, setRegister] = useState(() => {
        return {
            username: "",
            email: "",
            password: "",
            password2: "",
        }
    })

    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const submitChackin = event => {
        event.preventDefault();
        if (!validator.isEmail(register.email)) {
            alert("You didn't enter email")
        } else if (register.password !== register.password2) {
            alert("Repeat password correctly")
        } else if (!validator.isStrongPassword(register.password, {minSymbols: 0})) {
            alert("Password must be stronger!")
        } else {
            JSON.stringify({
                username: register.username,
                email: register.email,
                password: register.password,
            }).then(res => {
                if (res.data === true) {
                    alert("All right")
                } else {
                    alert("There is already a user with this email!")
                }
            }).catch(() => {
                alert("An error occurred on JSON")
            })
        }
    }

    return(
        <Form>
            <Form.Group>
                <h2>Register new user</h2>
                <Form onSubmit={submitChackin}>
                    <Form.p>Name: <Form.input
                        type="username"
                        id="username"
                        name="username"
                        value={register.username}
                        onChange={changeInputRegister}
                    /></Form.p>

                    <p>Email: <input
                        type="email"
                        id="email"
                        name="email"
                        value={register.email}
                        onChange={changeInputRegister}
                    /> </p>

                    <p>Password: <input
                        type="password"
                        id="password"
                        name="password"
                        value={register.password}
                        onChange={changeInputRegister}
                    /> </p>

                    <p>Repeat password: <input
                        type="password2"
                        id="password2"
                        name="password2"
                        value={register.password2}
                        onChange={changeInputRegister}
                    /></p>
                    <input type="submit"/>
                </Form>
            </Form.Group>
        </Form>
    )
}