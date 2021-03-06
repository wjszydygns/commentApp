import React, { Component } from "react"
import ComentList from "../comentlist/comentlist"
import ComentAdd from "../comentadd/comentadd"
import { Row, Col } from "antd"
import "../../index.css"

export default class App extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
            

    //     }

    // }
    //给组件类添加自定义state属性，并且这个state 也就是this.state
    state={
       coments: [
                { username: "michell", content: "react太难了" },
                { username: "lily", content: "喜欢学习react" },
                { username: "bob", content: "vue更好了解一下" },
                { username: "anna", content: "react太难了" },
                { username: "mike", content: "react太难了" },
            ],
    }

     addComent=(item)=>{
       
       let comentList=this.state.coments;
       comentList.unshift(item);
       this.setState({
        coments:comentList
       })     

     }
     delete=(index)=>{
       const {coments}=this.state;
       coments.splice(index,1);
       this.setState({
           coments
       })
     }
    render() {
        return (
            <div>
                <div className="header">
                    <h1 className="head">请发表对React的评论</h1>

                </div>

                <Row className="appRow" justify="center" gutter={20}>
                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                        <ComentAdd  coments={this.state.coments}  addComent={this.addComent}/>
                    </Col>
                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                        <ComentList coments={this.state.coments}  delete={this.delete}/>
                    </Col>
                </Row>




            </div>
        );


    }







}