import { ref, set } from "firebase/database";

function writeUserData(db, email, name) {
    const newEmail = changeEmail(email);
    set(ref(db, 'users/' + newEmail), {
        name: name,
    });
}

const changeEmail = (email) => {
    let dotIndex = email.lastIndexOf('.')
    const newEmail = email.slice(0, dotIndex) + email.slice(dotIndex + 1);
    return newEmail;
}

export default writeUserData;