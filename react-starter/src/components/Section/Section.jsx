import React, {useState, useEffect} from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';
import UsersData from '../../data.json';
import Users from '../Users/Users';
import FetchApi from '../fetchApi/fetchApi';
// import {departementsName} from '../fetchApi/fetchApi.jsx';
import './Section.css';


class Section extends React.Component {


    /**
     * The constructor function is a special function that gets called when a new instance of a class
     * is created
     */
    constructor(props) {
      /* The `super(props);` is calling the constructor of the parent class. */
      super(props);

      /* Initializing the state of the component. */
      this.state = {
        tab: [],
        departments: []
      }
    }

    /* componentDidMount */
    componentDidMount = () => {

        /* Init Variables */
        const JsonData = UsersData;
        let tempTab = []

        // for (let number of this.state.tab) {
        //     console.log("test1")
        //     fetch(`https://geo.api.gouv.fr/departements?code=${number}`)
        //         .then(response => {
        //             return response.json() 
        //         })
        //         .then((data) =>  {
        //             this.setState({departments: data})
        //             console.log("test")
        //         }); 
        // }

        /* The above code is mapping through the JsonData and pushing the departments into a temporary
        array. */
        JsonData.map(mapedData => {
            /* Mapping through the JsonData and pushing the departments into a temporary
                    array. */
            return (
                mapedData.departments.map(item => {
                    tempTab.push(item)
                    tempTab = [...new Set(tempTab)];
                })
            )
        })

        /* Setting the state of the component. */
        this.setState({tab: tempTab})   
        
        // console.log(this.state)
        
    }
  
    render() {

        const JsonData = UsersData;
        // console.log(departementsName);

        // console.log(this.state)

        // for (let number of this.state.tab) {
        //     fetch(`https://geo.api.gouv.fr/departements?code=${number}&fields=*`)
        //         .then(response => {
        //             return response.json() 
        //         })
        //         .then((data) =>  {
        //             this.setState({departments: data})
        //             console.log("test")
        //             return;
        //         }); 
        // }

        return (
            <>
                <div>
                    <Users />
                </div>
                <form onSubmit={this.handleSubmit} >
                    <label className="departments_list">
                        Nombre des d??partements avec JSON :
                        <select >
                            <option value="Select number"> -- S??lectionn?? le nombre du d??partement -- </option>
                            {this.state.tab.map(e => {
                                /* Mapping through the array and returning the value of the array. */
                                return (
                                    <option value={e} key={e}>
                                        {e}
                                    </option>
                                )
                            })}
                        </select>
                    </label>
                </form>
                <div>
                    <ul>
                        <li>{this.props.users}</li>
                    </ul>
                </div>
                <FetchApi />
            </>
        );
        }
  }
export default Section;


