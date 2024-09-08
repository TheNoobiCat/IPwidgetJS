import html from "./static/widget.html";
import axios from "axios";

async function main() {
    const response = await axios.get("http://ip-api.com/json");
    const result = response.data;
    
    const ip = result.query;
    const isp = result.isp;
    const country = result.countryCode;
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
        elements[i].querySelector(".ipwidgetjs-info-descr-final").innerHTML = "<b>Lat</b> " + result.lat + " <b>Long</b> " + result.lon;
    }
}

window.onload = main;
