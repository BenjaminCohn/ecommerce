import './App.css';
import Header from './components/Header/Header'
import Container from './components/Container/Container'
import Footer from './components/Footer/Footer'
import { Component, Fragment } from 'react';
import { getProducts } from './api/api-products';
import Loading from './components/Loading/Loading';
import Login from './components/Login/Login'
import Register from './components/Register/Register'


export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {products: []}
    }

    async componentDidMount(){
        const products = await  getProducts()
        this.setState({products: products})
    }

    render(){
        return <Login/>
    }
}

/*
var App = () =>{
    const products = [
        {
            _id: 1,
            name: "Formation complète React",
            price: 5999,
            soldPrice: 2999,
            category: 'Frontend',
            status: 'Sold',
            imageUrl: 'images/1.png'
        },
        {
            _id: 2,
            name: "Formation complète Angular",
            price: 6599,
            soldPrice: 2999,
            category: 'Frontend',
            status: 'Sold',
            imageUrl: 'images/2.png'
        },
        {
            _id: 3,
            name: "Formation complète Vue.Js",
            price: 8599,
            soldPrice: 2999,
            category: 'Frontend',
            status: 'Sold',
            imageUrl: 'images/3.png'
        },
        {
            _id: 4,
            name: "Formation complète Web",
            price: 8599,
            soldPrice: 2999,
            category: 'Frontend',
            status: 'Sold',
            imageUrl: 'images/4.png'
        },
        {
            _id: 1,
            name: "Formation complète React",
            price: 5999,
            soldPrice: 2999,
            category: 'Frontend',
            status: 'Sold',
            imageUrl: 'images/5.png'
        },
        {
            _id: 2,
            name: "Formation complète Angular",
            price: 6599,
            soldPrice: 2999,
            category: 'Frontend',
            status: 'Sold',
            imageUrl: 'images/6.png'
        },
        {
            _id: 3,
            name: "Formation complète Vue.Js",
            price: 8599,
            soldPrice: 2999,
            category: 'Frontend',
            status: 'Sold',
            imageUrl: 'images/7.png'
        },
        {
            _id: 4,
            name: "Formation complète Web",
            price: 8599,
            soldPrice: 2999,
            category: 'Frontend',
            status: 'Sold',
            imageUrl: 'images/8.png'
        },
        {
            _id: 1,
            name: "Formation complète React",
            price: 5999,
            soldPrice: 2999,
            category: 'Frontend',
            status: 'Sold',
            imageUrl: 'images/9.png'
        },
        {
            _id: 2,
            name: "Formation complète Angular",
            price: 6599,
            soldPrice: 2999,
            category: 'Frontend',
            status: 'Sold',
            imageUrl: 'images/10.png'
        },
        {
            _id: 3,
            name: "Formation complète Vue.Js",
            price: 8599,
            soldPrice: 2999,
            category: 'Frontend',
            status: 'Sold',
            imageUrl: 'images/11.png'
        },
        {
            _id: 4,
            name: "Formation complète Web",
            price: 8599,
            soldPrice: 2999,
            category: 'Frontend',
            status: 'Sold',
            imageUrl: 'images/12.png'
        }
    ]
    
    return <Fragment>
                <Header/>
                <Container products={products}/>
                <Footer/>
            </Fragment>
    
  
}
export default App;

*/

