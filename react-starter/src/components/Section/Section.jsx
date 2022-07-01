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

    componentDidMount = () => {
       
        const JsonData = UsersData;
        let tab = []

        {JsonData.map(mapedData => {

            return (
                
                mapedData.departments.map(item => {
                    
                    // console.log(item)
                    tab.push(item)
                    tab = [...new Set(tab)];

                    let test = tab.value
                    console.log(test)
                    // return(
                    //     <option value={tab}>
                    //         {tab}
                    //     </option>
                    // )

                })
                
            )
            
        })}
        console.log(tab)
        
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
                            
                                    <option value={this.props.tab}>
                                        {this.props.tab}
                                    </option>
                               
                            
                            {/* {JsonData.map(mapedData => {

                                // console.log(mapedData.departments)
                                // const uniqueNumber = this.getUnique(mapedData.departments, '')
                                // console.log(uniqueNumber)

                                return (
                                    
                                    mapedData.departments.map(item => {
                                        
                                        // console.log(item)
                                        return(
                                            <option value={item}>
                                                {item}
                                            </option>
                                        )

                                    })
                                )
                            })} */}
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