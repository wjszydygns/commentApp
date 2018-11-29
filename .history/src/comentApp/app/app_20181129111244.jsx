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
    render() {
        return (
            <div>
                <div className="header">
                    <h1 className="head">请发表对React的评论</h1>

                </div>

                <Row className="appRow" justify="center" gutter={20}>
                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                        <ComentAdd />
                    </Col>
                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                        <ComentList coments={this.state.coments}/>
                    </Col>
                </Row>




            </div>
        );


    }







}