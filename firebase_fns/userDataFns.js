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
    const dbRef = ref(db,`users/${newEmail}`);
    console.log("im here 1");

    dbRef.on('value', snapshot => {
        console.log('snapshot: ', snapshot.val());
    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.name);
    })
    // return await db.ref('/users/' + email).once('value').then((snapshot) => {
    //     var username = (snapshot.val() && snapshot.val().name) || 'Anonymous';
    // })
    // console.log(await ref(db,'/users/' + email).once('value'));
    console.log("im here");
}

const changeEmail = (email) => {
    let dotIndex = email.lastIndexOf('.')
    const newEmail = email.slice(0, dotIndex) + email.slice(dotIndex + 1);
    return newEmail;
}

export default {writeUserData, readUserData};