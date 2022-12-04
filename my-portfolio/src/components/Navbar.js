import React from 'react'
import '../App.css'

class Navbar extends React.Component {
    render() {

    
    return (
    <nav className="flex justify-center space-x-4 bg-">
    <a href="#" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
    <a href="#" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Skills</a>
    <a href="#" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About Me</a>
    <a href="#" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact Me</a>
  </nav>
        )
    }
}

export default Navbar;