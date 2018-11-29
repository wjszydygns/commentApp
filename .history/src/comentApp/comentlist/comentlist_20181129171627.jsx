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
             <h2　style={{display:coments.length===0 ? 'block':'none'}}>暂无评论，点击左侧添加评论</h2>
            {
                coments.map((item,index)=>{
                    return <ComentItem coment={item} key={index} {...this.props} index={index}></ComentItem>
                })
            }
         </div>
        );
    }

}
//定义组件要接受的属性，并且给它类型以及是否必传
ComentList.propTypes={
    coments:PropTypes.array.isRequired,
    delete:PropTypes.func.isRequired,
}