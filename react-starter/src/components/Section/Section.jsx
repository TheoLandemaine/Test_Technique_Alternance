import React from "react";
import ReactDOM from 'react-dom';
import UsersData from '../../data.json';
import Users from '../Users/Users';
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
        tab: []
      }
    }

    /* componentDidMount */
    componentDidMount = () => {
        /* Init Variables */
        const JsonData = UsersData;
        let tempTab = []

        fetch('https://geo.api.gouv.fr/departements?fields=*')
            .then(response => response.json())
            .then(data => {
                this.setState({departments: data})
            });

        console.log(this.state.departments)

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
            </>
        );
        }
  }
export default Section;


// {JsonData.map(mapedData => {

//     // console.log(mapedData.departments)
//     // const uniqueNumber = this.getUnique(mapedData.departments, '')
//     // console.log(uniqueNumber)

    

//             // console.log(mapedData.departments)
  
//                 // tab.push(mapedData.departments);
//                 tab2.push(mapedData.departments)
//                 // console.log(tab)
            
//             console.log("test")
//             console.log(tab2)
//             return(
//                 <option value={tab2}>
//                     {tab2}
//                 </option>
//             )
        
// })}