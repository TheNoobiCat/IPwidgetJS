import html from "./static/widget.html";
import axios from "axios";
import "./static/style.css"

async function main() {
    // change to ipinfo.io
    const response = await axios.get("https://ipinfo.io/json");
    const result = response.data;
    
    const ip = result.ip;
    const isp = result.org;
    const country = result.country;
    const city = result.city;

    const elements = document.getElementsByClassName("IP-WIDGET-JS");
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = html;
    }
    for (let i = 0; i < elements.length; i++) {
        elements[i].querySelector(".ipwidgetjs-ip").innerHTML = ip;
        elements[i].querySelector(".ipwidgetjs-info-isp").innerHTML = "<b>ISP: </b>" + isp;
        elements[i].querySelector(".ipwidgetjs-info-descr-city").innerHTML = "<b>" + city + "</b>";
        elements[i].querySelector(".ipwidgetjs-country-flag").src = `https://flagsapi.com/${country}/flat/24.png`;
        elements[i].querySelector(".ipwidgetjs-info-descr-final").innerHTML = "<b>Lat, Long: </b> "+result.loc;
    }
}

window.onload = main;
