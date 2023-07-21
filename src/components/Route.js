import React, {useState} from "react";
import '../styles/Route.css';

export const RouteTable = ({ list }) => {
    const [valueSearch, setValueSearch] = useState('')

    const search = () => {
       return  setValueSearch(e => console.log(e.target.value))
    }

    console.log(valueSearch)

    return (
        // className="App"
        <div className="table">
            <input className="table_input"  value={valueSearch} onChange={search} type="search"/>
            {list?.map((item) => (
                <div className="table_div" key={item}>
                    <div className="table_div__text">{item}</div>
                    <button className="table_button"/>
                </div>
            ))}
        </div>
    );
};