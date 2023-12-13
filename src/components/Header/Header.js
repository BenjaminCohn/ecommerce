import { Component } from 'react'
import './Header.css'

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state = {date: (new Date()).toLocaleDateString()+' '+(new Date()).toLocaleTimeString()}
    }

    componentDidCatch(){
        console.log('componentDidCatch');
    }
    componentDidMount(){
        //console.log(' Header componentDidMount');
        this.timeId = setInterval(()=>{
           // this.state.date = (new Date()).toLocaleDateString()+' '+(new Date()).toLocaleTimeString()
           this.setState({date: (new Date()).toLocaleDateString()+' '+(new Date()).toLocaleTimeString()})
            //console.log(this.state.date);
        },1000)
    }
    componentDidUpdate(){
        //console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.timeId)
    }
    shouldComponentUpdate(){
        //console.log('shouldComponentUpdate');
        return true
    }
    handleHome (event) {
        console.log(event.type);
    }
    handleAbout (event) {
        console.log(event.target);
    }
    
    
    render(){
        return  <header>
                    <nav>
                        <div className="nav-item" onClick={ this.handleHome}>Accueil</div>
                        <div className="nav-item" onMouseOver={ this.handleAbout }>A propos</div>
                        <div className="nav-item">Boutique</div>
                        <div className="nav-item">Contact</div>
                    </nav>
                </header>
    }
}
/*
var Header = () =>{
    return  <header>
                <nav>
                    <div className="nav-item">Accueil</div>
                    <div className="nav-item">A propos</div>
                    <div className="nav-item">Boutique</div>
                    <div className="nav-item">Contact</div>
                </nav>
            </header>
}

export default Header*/