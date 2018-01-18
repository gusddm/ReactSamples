import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAn_oXPNXfUtEsODGkWKlbZbg_aJDc_Irg",
    authDomain: "mytodolist-c3654.firebaseapp.com",
    databaseURL: "https://mytodolist-c3654.firebaseio.com"
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export  { base };