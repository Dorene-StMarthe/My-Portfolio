import {React, Component} from 'react';
import '../App.css'
import Projects from './Projects';

class Landing extends Component {
    render() {
        return(
            <>
            <div className= "Landing">
                <h5>Dorene St.Marthe </h5>
                <h3>Dog lover, Coffee enthusiast and Software Developer</h3>
                <br></br>
                <button className= "bg-yellow hover:bg-cyan text-white font-bold py-2 px-4 border-b-4 border-silver hover:border-cyan rounded">View Projects</button>
            </div>
            <div>
            <Projects />
            </div>
            </>
        )
    }
}

export default Landing;