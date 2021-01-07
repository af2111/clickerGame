import {get, set} from "js-cookie";

function getCookie(name) {
    return get(name);
} 
function setCookie(name, val) {
    set(name, val);
}

export {getCookie, setCookie};