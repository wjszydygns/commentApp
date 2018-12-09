import React, { Component } from "react"
import ComentList from "../comentlist/comentlist"
import ComentAdd from "../comentadd/comentadd"
import { Row, Col } from "antd"
import "../../../index.css"
import axios from "axios"
import PubSub from "pubsub-js"

export default class ComentApp extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {


    //     }

    // }
    //给组件类添加自定义state属性，并且这个state 也就是this.state
    state = {
        coments: [
            { username: "michell", content: "react太难了" },
            { username: "lily", content: "喜欢学习react" },
            { username: "bob", content: "vue更好了解一下" },
            { username: "anna", content: "react太难了" },
            { username: "mike", content: "react太难了" },
        ],
        repoName: '',
        repoUrl: '',
    }
    componentDidMount() {
      
      
        this.getComents();  
     //订阅消息,订阅孙子组件的删除事件
        PubSub.subscribe("delete",this.delete)

    }

    getComents=()=>{
      //调用接口获取数据：用axios
        const url = `https://api.github.com/search/repositories?q=re&sort=stars`;
        axios.get(url).then(res => {
            //console.log(res.data);
            const { name, html_url } = res.data.items[0];
            this.setState({
                repoName: name,
                repoUrl: html_url
            })

        }).catch(msg => {
            alert("error")
        })


        fetch(url).then(res => {
            return res.json();  //这一步返回的还是一个Promise对象
        }).then(data => {
            console.log(data);  //这里的这个data就直接是res.data

        }).catch(err => alert("error"))




    }
    //添加评论
    addComent = (item) => {

        let comentList = this.state.coments;
        comentList.unshift(item);
        this.setState({
            coments: comentList
        })

    }
    //删除指定评论
    delete = (msg,index) => {
        const { coments } = this.state;
        coments.splice(index, 1);
        this.setState({
            coments
        })
    }
    render() {
        const { repoName, repoUrl } = this.state;
        return (
            <div>
                <div className="header">
                    {repoName ? <h2>most star repo is<a href={repoUrl}>{repoName}</a></h2>
                        : <h2>LOADING...</h2>
                    }
                    <h1 className="head">请发表对React的评论</h1>

                </div>

                <Row className="appRow" justify="center" gutter={20}>
                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                        <ComentAdd coments={this.state.coments} addComent={this.addComent} />
                    </Col>
                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                        <ComentList coments={this.state.coments} />
                    </Col>
                </Row>

            </div>
        );
    }
}