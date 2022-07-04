import React, { useEffect, useState } from "react"

const Test = () => {

    const [departementsName, setUsers] = useState([])
    // let tab2 = []

    const fetchData = () => {

        fetch('https://geo.api.gouv.fr/departements')
            .then(response => {
                return response.json() 
            })
            .then((data) =>  {
                setUsers(data)
                // console.log(data)
            }); 
    }

    useEffect(() => {
        fetchData()
      }, [])

    // {users.map(user => {
    //     tab2.push(user.code)
    //     // console.log(tab2)

        

    // })}

    console.log(departementsName)

    return ( 
        <div>
            <br />
            <label className="departments_list">
                Nom des départements avec API :
                <select>
                    <option value="">-- Sélectionné le nom de département --</option>
                    {departementsName.map(user => (

                        <option key={user.id} value={user.nom}>{user.nom}</option>
                    
                    ))}
                </select>
            </label>
        </div>
    )
}

export default Test;
