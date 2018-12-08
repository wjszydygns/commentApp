import React,{Component} from "react"
import SearchTop from "./searchTop"
import  SearchDisplay  from "./searchDisplay"

export default class Search extends React.Component
{
 constructor(props){
     super(props)
     this.state = {
         searchName:''


     }
 }
 setSearchName = (searchName) => {
    this.setState({searchName})
  
 }//父组件中定义一个searchName,当子组件1的改变了就会告诉父组件改变，当父组件改变了，
 //子组件2也可以拿到改变了的值。达到了兄弟组件之间传递的效果。
 render(){
    return (
         <div>
              <SearchTop setSearchName={this.setSearchName} {...this.state}/>
             < SearchDisplay {...this.state}/>
         </div>

    )
 }




    
}
