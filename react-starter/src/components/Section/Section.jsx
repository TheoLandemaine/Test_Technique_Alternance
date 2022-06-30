import React, {useState, useEffect} from "react";
import axios from 'axios';
import './Section.css';
import Data from '../../data.json'

function Section() {

    const departments = require("../../data.json")
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://geo.api.gouv.fr/departements');

            setData(result.data);
            // console.log(result.data)
        };
        fetchData();
    }, [])

    // const mapItem = [];
    // data.forEach(test1 => {
    //     Data.forEach(test2 => {
    //         if (test1.departements === test2.code) {
    //             let has = mapItem.includes(test1);
    //             if (has == false) {
    //                 mapItem.push(test1);
    //             }
                
    //             console.log(mapItem)
    //         }
    //     })
    // })


    return ( 
        <>
            <div>
                {Data.map( data => {
                    return(
                        <div className="list" key={ data.id}>
                            {data.name }
                        </div>
                    )
                })}
            </div>
            <div>
                <select id="test">
                    <option id="option" >--- Select departments ---</option>
                    
                    {departments.map( data => {
                        return (
                            <option key={data.id} value={data.departments}>
                                {data.departments}
                            </option>
                        ) 
                    })}
                </select>
                <div>
                    <h2>test api</h2>
                    <select>
                        {data.map(item => { 
                            
                            return(
                                <option key={item.id} value={item.code}>
                                   {item.code}
                                </option>
                            )
                            
                        })}
                    </select>
                    <select>
                        {Data.map(mapedData => {
                        return(
                            mapedData.departments.map( departments => { 
                                return(
                                    <option value={departments} >
                                        {departments}
                                    </option>
                                
                                )
                            })
                        )
                    })}
                    </select>
                </div>
            </div>
        </>
    )
}


export default Section;


 {/* <select className="form-control">
                <option id="option" >Select data</option>
                    
                    {Data.map(mapedData => {
                        return(
                            mapedData.departments.map( departments => { 
                                return(
                                    <option value={departments} key={mapedData.id}>
                                        {departments}
                                    </option>
                                
                                )
                            })
                        )
                    })}
            </select> */}