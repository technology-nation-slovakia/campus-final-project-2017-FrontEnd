import dispatcher from '../dispatcher';
import axios from 'axios';

export function reloadMapColor() {
    axios("http://campus-final-project-2017-dusanjankovic.c9users.io:8080/data").then((data) => {
        console.log("got the data!", data);
        dispatcher.dispatch({type: "RELOAD_MAP_COLOR", data});
    })
}