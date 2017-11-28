import dispatcher from '../dispatcher';
import axios from 'axios';



//there are 4 requests for each room separetly because when I wanted use genereator it would demand additional changes to babel
// and stuff that Im not familiar with yet
export function reloadMapColor() {
    axios.get("http://campus-final-project-2017-dusanjankovic.c9users.io:8080/data1").then((data1) => {

        // if there is ongoing event and next event that day, API sends Array of 2,
        // the ongoing event data[0] will add red color to
        if (data1.data[0]){
            data1.data[0].colorCaffe = '#cc291f';
        }
        console.log("got the data!", data1);
        dispatcher.dispatch({type: "RELOAD_MAP_COLOR1", data1});
    });
    axios.get("http://campus-final-project-2017-dusanjankovic.c9users.io:8080/data2").then((data2) => {
        console.log("got the data!", data2);
        dispatcher.dispatch({type: "RELOAD_MAP_COLOR2", data2});
    });
    axios.get("http://campus-final-project-2017-dusanjankovic.c9users.io:8080/data3").then((data3) => {
        console.log("got the data!", data3);
        dispatcher.dispatch({type: "RELOAD_MAP_COLOR3", data3});
    });
    axios.get("http://campus-final-project-2017-dusanjankovic.c9users.io:8080/data4").then((data4) => {
        console.log("got the data!", data4);
        dispatcher.dispatch({type: "RELOAD_MAP_COLOR4", data4});
    });
}