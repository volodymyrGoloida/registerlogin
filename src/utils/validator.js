function validatePassword(str) {
    if (str.length < 6) {
        return { status: false, message: 'пароль закороткий', level: 'легкий' }
    }
    if (str.search(/[a-z]/) === -1) {
        return {
            status: false,
            message: 'немає літер нижнього регістру(латинських)',
            level: 'легкий',
        }
    }
    if (str.search(/[A-Z]/) === -1) {
        return {
            status: false,
            message: 'немає літер верхньго регістру(латинських)',
            level: 'легкий',
        }
    }
    if (str.search(/[0123456789]/) === -1) {
        return {
            status: false,
            message: 'пароль повинен мати числа',
            level: 'середеній',
        }
    }
    if (str.search(/[!@#$%^&*+~|,./<>?]/) === -1) {
        return {
            status: false,
            message: 'пароль повинен мати спец символи !@#$%^&*()-=_+~[|,./<>?',
            level: 'середній',
        }
    }
    if (str.search(/\s/) !== -1) {
        return {
            status: false,
            message: 'пароль має пробіли',
            level: 'середній',
        }
    }

    return { status: true, message: 'ok', level: 'складний' }
}

export default validatePassword
