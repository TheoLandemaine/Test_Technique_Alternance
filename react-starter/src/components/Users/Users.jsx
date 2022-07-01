import React from "react";
import UsersData from '../../data.json';


class Users extends React.Component {

    render() {
        return (
            <>
                <br />
                <br />
                <div>
                    {UsersData.map( data => {
                        return(
                            <div className="list" key={data.id}>
                                {data.name }
                            </div>
                        )
                    })}
                </div>
                <br />
                <br />
            </>
          );
    }
}

export default Users;