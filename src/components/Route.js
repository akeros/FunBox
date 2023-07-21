import React, {useState} from "react";
import '../styles/Route.css';

export const RouteTable = () => {
    const [valueSearch, setValueSearch] = useState('')

    const Search = () => {
       return  setValueSearch(e => console.log(e.target.value))
    }

    console.log(valueSearch)

    return (
        // className="App"
        <div className="table">
            <input className="table_input"  value={valueSearch} onChange={Search} type="search"/>
            <div className="table_div">
                <div className="table_div__text">Метка</div>
                <button className="table_button"/>
            </div>
        </div>
    );
};