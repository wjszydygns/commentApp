import React,{Component} from "react"
import "../../index.css"
import {Button,Icon} from "antd"
import PropTypes from "prop-types"; 

export default class ComentItem extends React.Component{
   //给组件类添加指定属性
   static propTypes={
       coment:PropTypes.object.isRequired,
       delete:PropTypes.func,
       index:PropTypes.number.isRequired
   }

    constructor(props)
    {
        super(props)
        this.state={

        }
    }

    delete=()=>{
       const {delete:any, index:number,coment}=this.props;
       if(window.confirm(`确定要删除${coment.username}的评论吗？`))
       {
        delete(index);
       }
      
    }
    render(){
        const {coment}=this.props;
        return(
         <div className="bordered">
           <label htmlFor="content">{coment.username}说：</label>
           <p className="item">{coment.content}</p>
           <Button className="delete" 
           　　　　　icon="delete" type="primary"
           　　　　　onClick={this.delete}　>删除</Button>
        </div>
        );
    }
}

