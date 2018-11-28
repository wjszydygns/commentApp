import React from "react"
import ReactDOM from "react-dom"

export default class Life extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            opcacity:1
        }
    }
    componentWillMount(){
     console.log(this);
     console.log("挂载前")


    }

    componentDidMount(){
        debugger
       setInterval(()=>{
           
        let {opcacity}=this.state;
        opcacity-=0.2;
        if(opcacity <=0)
        {
            opcacity=1
        }
        this.setState({opcacity})
       },200)
       console.log("挂载结束")
    
    }
    componentWillUpdate(){
        const {opcacity}=this.state;
         console.log("opacity:"+opcacity)


    }
    componentDidUpdate(){
      console.log("更新结束")

    }
    close=()=>{

     ReactDOM.unmountComponentAtNode(document.getElementById("root"))


    }

    render(){
        const {opcacity}=this.state;
      return (
       <div>
           <h2 style={{opcacity:opcacity}}>React太难了</h2>
           <button  onClick={this.close}>不干了</button>
       </div>

      );




    }





}