import React,{Component} from 'react';
// import {robots} from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';
class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchField:'',
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
                return response.json();
            })
             .then(users=>{
                this.setState({robots:users});
                })

    }
 onsearchChange=(event)=>{
     this.setState({searchField:event.target.value});
     
       
    }
    render(){
        const {robots,searchField}=this.state;
        const filteredRobots=robots.filter(robot=>{
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
        })
       return (!robots.length)?
             <h1>Loading...</h1>:
        
        
(
    <div className='tc'>
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={this.onsearchChange}/>
        <Scroll>
            <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
        </Scroll>
    </div>
);
    }
};
export default App;