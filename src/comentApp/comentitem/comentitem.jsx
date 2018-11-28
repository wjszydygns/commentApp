import React,{Component} from "react"
import "../../index.css"
import {Button,Icon} from "antd"

export default class ComentItem extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }
    render(){
        return(
         <div className="bordered">
           <label htmlFor="content">XXX说：</label>
           <p className="item">cccccccc</p>
           <Button className="delete" icon="delete" type="primary">删除</Button>
        </div>
        );
    }






}