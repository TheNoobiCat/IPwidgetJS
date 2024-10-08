"use client"

import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import "./static/style.css"

export function IPwidgetJS(props){
    const [isp, setIsp] = React.useState("");
    const [ip, setIp] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [city, setCity] = React.useState("");
    const [loc, setLoc] = React.useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://ipinfo.io/json");
                const result = response.data;
                
                const ip = result.ip;
                const isp = result.org;
                const country = result.country;
                const city = result.city;
                const loc = result.loc

                setIp(ip);
                setIsp(isp);
                setCountry(country);
                setCity(city);
                setLoc(loc)
            } catch (error) {
                console.error("Error fetching IP data:", error);
            }
        };

        fetchData();

    }, []);

    return(
        <div style={{width:props.width||"220px", height:props.height||"85px", backgroundColor:props.bg||"#333333"}} className="ipwidgetjs-widget">
            <div className="ipwidgetjs-inner">
                <div className="ipwidgetjs-ip-container">
                    <div className="ipwidgetjs-flag-container">
                        <img src={`https://flagsapi.com/${country}/flat/24.png`} alt="Country" className="ipwidgetjs-country-flag"/>
                    </div>
                    <h2 className="ipwidgetjs-ip">{ip}</h2>
                </div>
                <div className="ipwidgetjs-info-container">
                    <h2 style={{display: props.showIsp !== undefined ? props.showIsp ? "block" : "none" : "block"}} className="ipwidgetjs-info-isp"><b>ISP:</b> {isp}</h2>
                    <h2 style={{display: props.showCity !== undefined ? props.showCity ? "block" : "none" : "block"}} className="ipwidgetjs-info-descr ipwidgetjs-info-descr-city"><b>{city}</b></h2>
                    <h2 style={{display: props.showLatLong !== undefined ? props.showLatLong ? "block" : "none" : "block"}} className="ipwidgetjs-info-descr ipwidgetjs-info-descr-final"><b>Lat, Long:</b> {loc}</h2>
                </div>
            </div>
        </div>
    )
}
