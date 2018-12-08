import React,{Component} from "react"
import SearchTop from "./searchTop"
import  SearchDisplay  from "./searchDisplay"

export default class SearchOpt extends React.Component
{
 constructor(props){
     super(props)
     this.state = {
       


     }
 }
//组件优化：采用发布订阅模式来进行兄弟组件之间的通信，不用父组件来当中间方，可以直接通信


 //父组件中不用定义SearchName和修改它的方法了，因为兄弟组件之间不再通过父亲组件通信，而是通过发布订阅的方式
 render(){
    return (
         <div>
              <SearchTop />
             < SearchDisplay/>
         </div>

    )
 }




    
}
