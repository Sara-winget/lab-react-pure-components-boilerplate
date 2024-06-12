import React ,{Component}from 'react'
import parentComp from './CounterComp'
class NormComp extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            toggle:true,
        }
    }
    
    toggling=()=>{
        this.setState(prev=>{return{toggle:!prev.toggle}})
    }
    
        increaseCounter=()=>{
            this.setState(prev=>{
        if(this.state.toggle){
        return {
            count:prev.count+1
            }}
            else
            return {count:prev.count}
            })
            }
           
            
    render(){
       console.log("simple comp")
    
    const {count}=this.state
    return(
        <>
        <div>Normal Comp</div>
        <h1>{count}</h1>
        <button onClick={this.toggling}>set Toggle</button>
        <button onClick={this.increaseCounter}>counter</button>
        </>
    )
   } 
}export default NormComp;