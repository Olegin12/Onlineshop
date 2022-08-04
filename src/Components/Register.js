import {useState} from "react";

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
}