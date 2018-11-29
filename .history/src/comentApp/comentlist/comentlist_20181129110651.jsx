import React,{Component} from "react"
import  ComentItem from "../comentitem/comentitem";
import PropTypes from "prop-types"

export default class ComentList extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }
    render(){
        const {coments}=this.props;
        return(
         <div >
             <h3 style={{fontWeight:100}}>评论回复:</h3>
            {
                coments.map((item)=>{
                    return <ComentItem coment={item}></ComentItem>
                })
            }
         </div>
        );
    }

}
//定义组件要接受的属性，并且给它类型以及是否必传
ComentList.PropTypes={
    coments:PropTypes.array.isRequired
}