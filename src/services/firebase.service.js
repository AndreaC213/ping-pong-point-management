/* Modules */
import firebase from 'firebase/app';
import 'firebase/firestore';

/* Configs */
const configs = {
    apiKey: "AIzaSyDKMs71xywhar24Gj1A3pw9JxIHGd7X26Y",
    authDomain: "table-tennis-scoreboard-44f85.firebaseapp.com",
    databaseURL: "https://table-tennis-scoreboard-44f85.firebaseio.com",
    projectId: "table-tennis-scoreboard-44f85",
    storageBucket: "table-tennis-scoreboard-44f85.appspot.com",
    messagingSenderId: "510139307152",
    appId: "1:510139307152:web:646ff6e16b85277a737415",
    measurementId: "G-2HE83QZYBH"
};

/* Default App */
let app = firebase.initializeApp(configs);

/* Initializer */
const init = (options = {}) => {
    return app = firebase.initializeApp(configs);
};

/* Database */
const db = (optionalApp) => {
    const _app = optionalApp || app;
    const _firestore = _app.firestore();

    _firestore.settings({ timestampsInSnapshots: true });

    return _firestore;
};

/* Matches Database */
const matches = () => {
    return db().collection('matches');
};

/* Export */
export const firebaseService = {
    configs,
    init,
    app,
    db,
    matches,
};
