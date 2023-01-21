import {React, Component} from 'react'
import '../App.css'
import wellread from '/Users/dorenest.marthe/Desktop/Personal-Projects/My-Portfolio/my-portfolio/src/images/wellread.png'
import tictactoe from '/Users/dorenest.marthe/Desktop/Personal-Projects/My-Portfolio/my-portfolio/src/images/tictactoe.png'
import tindog from '/Users/dorenest.marthe/Desktop/Personal-Projects/My-Portfolio/my-portfolio/src/images/tindog.png'
class Projects extends Component {
    render() {

    
    return (
        <>
         <hr></hr>
    <div className="ProjectContainer">
        <div className="Project">
            <a href="https://express-bookclub-app.herokuapp.com/wellread"  >
                <img
                    src={wellread}
                    alt="wellread bookclub" />
            </a>
        </div>
        <div className="Project">
            <a href="https://dorene-stmarthe.github.io/TicTacToe/"  >
                <img
                    src={tictactoe}
                    alt="wellread bookclub" />
            </a>
        </div>
        <div className="Project">
            <a href="https://github.com/Dorene-StMarthe/Tindog.github.io"  >
                <img
                    src={tindog}
                    alt="wellread bookclub" />
            </a>
        </div>
    </div>
    </>
        )
    }
}


export default Projects;