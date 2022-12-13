import {React, Component} from 'react';
import '../App.css'

class Landing extends Component {
    render() {
        return(
            <>
            <div className= "Landing">
                <h5>Dorene St.Marthe </h5>
                <h3>Dog lover, Coffee enthusiast and Software Developer</h3>
                <button className= "bg-bermuda-500 hover:bg-bermuda-400 text-white font-bold py-2 px-4 border-b-4 border-bermuda-700 hover:border-blue-500 rounded">View Projects</button>
            </div>
            
            </>
        )
    }
}

export default Landing;