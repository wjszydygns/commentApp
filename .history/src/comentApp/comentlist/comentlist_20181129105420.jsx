import React,{Component} from "react"
import  ComentItem from "../comentitem/comentitem";

export default class ComentList extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }
    render(){
        return(
         <div >
             <h3 style={{fontWeight:100}}>评论回复:</h3>
             <ComentItem></ComentItem>
             <ComentItem></ComentItem>
         </div>
        );
    }






}