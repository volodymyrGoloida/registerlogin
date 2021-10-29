import React from 'react'
import { Link } from 'react-router-dom'
import style from '.././index.css'
function Form({
    submitUserForm,
    handleChangeFunc,
    isRegister,
    redirectPath,
    textLink,

    texth1,
    forgotPassword,
    hardLevelPassword,
}) {
    return (
        <div className="container">
            <h1>{texth1}</h1>
            <form onSubmit={submitUserForm}>
                {isRegister && (
                    <input
                        onChange={handleChangeFunc}
                        type="text"
                        name="name"
                        placeholder="name"
                        autoComplete="off"
                    />
                )}
                <input
                    onChange={handleChangeFunc}
                    type="text"
                    name="email"
                    placeholder="email"
                    autoComplete="off"
                />
                <input
                    onChange={handleChangeFunc}
                    type="password"
                    name="password"
                    placeholder="password"
                    autoComplete="off"
                />
                {isRegister && <p>складність паролю {hardLevelPassword}</p>}
                {isRegister && (
                    <input
                        className="repeatPswrd"
                        onChange={handleChangeFunc}
                        type="password"
                        name="repeatPassword"
                        placeholder="repeat password"
                        autoComplete="off"
                    />
                )}
                <button type="submit">submit</button>

                <p>
                    <Link to={redirectPath}>{textLink}</Link>
                </p>

                {!isRegister && (
                    <a onClick={forgotPassword}> не памятаєте паролю? </a>
                )}
            </form>
        </div>
    )
}

export default Form
