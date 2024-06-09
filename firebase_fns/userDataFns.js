import { ref, set, get, child } from "firebase/database";

export async function writeUserData(db, email, name) {
    const newEmail = changeEmail(email);
    await set(ref(db, 'users/' + newEmail), {
        name: name,
    });
}

export async function readUserData(db, email) {
    const newEmail = changeEmail(email);
    console.log('new email is ' + newEmail);
    console.log(db);

    const dbRef = await ref(db);
    console.log("im here 1");

    await get(child(dbRef, `users/${newEmail}/name`)).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return 'name';
        }
    }).catch((error) => {
        console.error(error);
    });
    console.log("im here");
}

const changeEmail = (email) => {
    let dotIndex = email.lastIndexOf('.')
    const newEmail = email.slice(0, dotIndex) + email.slice(dotIndex + 1);
    return newEmail;
}

export default {writeUserData, readUserData};