import React, { useEffect, useState } from "react"

const Test = () => {

    const [users, setUsers] = useState([])
    let tab2 = []

    const fetchData = () => {

        fetch('https://geo.api.gouv.fr/departements&fields=*')
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

    {users.map(user => {
        tab2.push(user.code)
        // console.log(tab2)

        

    })}

    return ( 
        <div>
                <ul>
                    {users.map(user => (

                        <li key={user.id}>{tab2}</li>
                    
                    ))}
                </ul>
        </div>
    )
}

export default Test;
