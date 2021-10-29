import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Form from '../components/Form'

function Login() {
    const { users } = useSelector((users) => users)
    console.log(users)
    const [userLoginInfo, setUserLoginInfo] = useState({
        email: '',
        password: '',
    })
    function forgotPassword() {
        let name = prompt('вкажіть своє імя(name)')
        let candidateForgot = users.find((el) => el.name === name)
        console.log(candidateForgot)
        if (!candidateForgot) {
            return alert('такого імя не існує')
        }
        let email = prompt('введіть свій емаїл')
        if (!candidateForgot.email === email) {
            return 'емаїл не вірний'
        }
        let chaptersInPassword = prompt('перша і остання буква паролю')
        if (
            candidateForgot.password[0] === chaptersInPassword[0] &&
            candidateForgot.password[candidateForgot.password.length - 1] ===
                chaptersInPassword[1]
        ) {
            alert('your password ' + candidateForgot.password)
        }
    }
    function submitUserForm(event) {
        event.preventDefault()

        const candidate = users.find(
            (user) => user.email === userLoginInfo.email
        )
        console.log(candidate)
        if (!candidate) return alert('ви не зареєстровані')
        if (candidate.password === userLoginInfo.password) {
            alert('вітаємо вас ' + candidate.name)
        }
    }
    function handleChangeFunc(event) {
        const { name, value } = event.target

        setUserLoginInfo((prevValue) => ({
            ...prevValue,
            [name]: value,
        }))
    }
    return (
        <Form
            submitUserForm={submitUserForm}
            handleChangeFunc={handleChangeFunc}
            redirectPath="/"
            textLink="Ще не зареєстровані?"
            texth1="Login"
            forgotPassword={forgotPassword}
        />
    )
}

export default Login
