import React, { useState } from 'react'
import validatePassword from '../utils/validator'
import Form from '../components/Form'
import { useSelector, useDispatch } from 'react-redux'
import setUsers from '../redux/actions/users'
import { useHistory } from 'react-router'

function Register() {
    const dispatch = useDispatch()
    const history = useHistory()

    const { users } = useSelector((store) => store)
    console.log(users)
    const [userRegisterInfo, setUserRegisterInfo] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    })
    const [hardLevelPassword, setHardLevelPassword] = useState('')

    const submitUserForm = (event) => {
        event.preventDefault()

        let valuesInInfo = Object.values(userRegisterInfo)

        if (valuesInInfo.includes('')) {
            return alert('одне або декілька з полей пусті')
        }
        const { name, email, password, repeatPassword } = userRegisterInfo
        if (password !== repeatPassword) {
            return alert('паролі не співпадають')
        }

        const { status, message } = validatePassword(userRegisterInfo.password)
        if (!status) return alert(message)

        const candidate = users.find(
            (user) => user.email === userRegisterInfo.email
        )
        if (candidate) return alert('you have already been register')

        dispatch(setUsers({ name, email, password }))
        history.push('/login')
    }

    const handleChangeFunc = (event) => {
        const { name, value } = event.target
        if (name === 'password') {
            const { status, message, level } = validatePassword(value)
            setHardLevelPassword(level)
        }

        setUserRegisterInfo((prevValue) => ({
            ...prevValue,
            [name]: value,
        }))
    }

    return (
        <Form
            submitUserForm={submitUserForm}
            handleChangeFunc={handleChangeFunc}
            redirectPath="/login"
            textLink="Уже зареєстровані?"
            texth1="Register"
            hardLevelPassword={hardLevelPassword}
            isRegister
        />
    )
}

export default Register
