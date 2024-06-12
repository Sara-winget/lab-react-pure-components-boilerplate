import React,{PureComponent} from 'react';

class PureComp extends PureComponent{
    constructor(){
        super()
        this.state={
            count:0,
            toggle:true,
        }
    }
    
   
        increaseCounter=()=>{
            
            this.setState(prev=>{
                if(this.state.toggle){
                return {
                count:prev.count+1
                }}
                else
                return {
            count:prev.count}
                })
                }
                
                
                toggling=()=>{
                    this.setState(prev=>{return{toggle:!prev.toggle}})
                    }
                    render(){
    console.log("pure component")
const {count}=this.state
    return(
        <>
        <div>Pure Componrent</div>
        <h1>{count}</h1>
        <button onClick={this.increaseCounter}>counter</button>
        <button onClick={this.toggling}>toggle</button>
        </>
    )
}

}
export default PureComp