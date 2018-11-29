import React,{Component} from "react"
import "../../index.css"
import {Button,Icon} from "antd"
import PropTypes from "prop-types"; 

export default class ComentItem extends React.Component{
   //给组件类添加指定属性
   static propTypes={
       coment:PropTypes.object.isRequired,
       delete:PropTypes.func
   }

    constructor(props)
    {
        super(props)
        this.state={

        }
    }

    delete=()=>{
       const {delete:any}=this.props;
       console.log(e)
       



    }
    render(){
        const {coment,index}=this.props;
        return(
         <div className="bordered">
           <label htmlFor="content">{coment.username}说：</label>
           <p className="item">{coment.content}</p>
           <Button className="delete" 
           　　　　　icon="delete" type="primary"
           　　　　　onClick={(e)=>this.delete(e)}　>删除</Button>
        </div>
        );
    }
}

