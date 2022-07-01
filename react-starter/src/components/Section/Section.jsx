import React, {useState, useEffect} from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';
import UsersData from '../../data.json';
import Users from '../Users/Users';
import FetchApi from '../fetchApi/fetchApi';

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

        for (let number of this.state.tab) {

            fetch(`https://geo.api.gouv.fr/departements?code=${number}`)
                .then(response => {
                    return response.json() 
                })
                .then((data) =>  {
                    this.setState({departments: data})
                }); 
        }

        


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
    }
  
    render() {

        const JsonData = UsersData;

        console.log(this.state)

        return (
            <>
                <div>
                    <Users />
                </div>
                <form onSubmit={this.handleSubmit} >
                    <label className="departments_list">
                        Nombre des départements :
                        <select >
                            <option value="Select number"> -- Sélectionné le département -- </option>
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
                <FetchApi />
            </>
        );
        }
  }
export default Section;


