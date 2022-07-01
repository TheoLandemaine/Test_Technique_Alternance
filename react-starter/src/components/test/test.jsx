import React, { useEffect, useState } from "react"


const Test = () => {

    const [users, setUsers] = useState([])

    const fetchData = () => {

        fetch('https://geo.api.gouv.fr/departements')
            .then(response => {
                return response.json() 
            })
            .then((data) =>  {
                setUsers(data)
                console.log(data)
            }); 
    }

    useEffect(() => {
        fetchData()
      }, [])

    return ( 
        <div>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.code}</li>
                    ))}
                </ul>
        </div>
    )
}

export default Test;
