import React,{Component} from "react"
import "../../index.css"
import {Button,Icon} from "antd"
import PropTypes from "prop-types"; 

export default class ComentItem extends React.Component{
   //给组件类添加指定属性
   static PropTypes={
       coment:PropTypes.object.isRequired
   }

    constructor(props)
    {
        super(props)
        this.state={

        }
    }
    render(){
        const {coment}=this.props;
        return(
         <div className="bordered">
           <label htmlFor="content">{coment.username}：</label>
           <p className="item">{coment.content}</p>
           <Button className="delete" icon="delete" type="primary">删除</Button>
        </div>
        );
    }
}

