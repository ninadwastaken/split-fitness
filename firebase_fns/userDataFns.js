import { ref, set, get, child } from "firebase/database";

export async function writeUserData(db, email, name) {
    const newEmail = changeEmail(email);
    await set(ref(db, 'users/' + newEmail), {
        name: name.charAt(0).toUpperCase() + name.slice(1),
    });
}

export async function readUserData(db, email) {
    const newEmail = changeEmail(email);

    const dbRef = await ref(db);
    let name = '';

    await get(child(dbRef, `users/${newEmail}/name`)).then((snapshot) => {
        if (snapshot.exists()) {
            name = snapshot.val();
        } else {
            alert('name doesn\'t exist');
        }
    }).catch((error) => {
        alert(error);
    });
    return name;
}

const changeEmail = (email) => {
    let dotIndex = email.lastIndexOf('.')
    const newEmail = email.slice(0, dotIndex) + email.slice(dotIndex + 1);
    return newEmail;
}

export default {writeUserData, readUserData};