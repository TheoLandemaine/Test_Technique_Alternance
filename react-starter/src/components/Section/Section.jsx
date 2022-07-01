import React from "react";
import ReactDOM from 'react-dom';
import UsersData from '../../data.json';
import Users from '../Users/Users';
import './Section.css';



class Section extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
    }

    handleChange = event => {
        this.setState({value: event.target.value});
    }
  
    getUnique(arr, comp) {
        const unique = arr

            .map(e => e[comp])

            .map((e, i, final) => final.indexOf(e) === i && i)

            .filter(e => arr[e])

            .map(e => arr[e]);

        return unique;
    }
  
    render() {

        const JsonData = UsersData;
        // const uniqueNumber = this.getUnique(JsonData.departments, '')

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
                            {JsonData.map(mapedData => {

                                console.log(mapedData.departments)
                                const uniqueNumber = this.getUnique(mapedData.departments, '')
                                console.log(uniqueNumber)

                                return (
                                    
                                    uniqueNumber.map(item => {
                                        console.log(item)
                                        
                                            return(
                                                <option value={item}>
                                                    {item}
                                                </option>
                                            )
                                        
                                        
                                    })
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

