import React, { Component } from "react"
import "../../index.css"
import { Input, Row, Col, Button } from "antd"
import PropTypes from "prop-types"

export default class ComentAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "mihcell",
            content: "react比较复杂",

        }
    }
    static propTypes = {
        coments: PropTypes.array.isRequired,
        addComent:PropTypes.func.isRequired

    }

    add=()=>{
       const {name,content}=this.state;
       const {addComent}=this.props;
    //    let item={
    //        username:name,
    //        content:content       
    //    }省代码的写法
       let item=this.state;
       addComent(item);
       //清除输入数据
       this.setState({
           username:"",
           content:"",

       })

    }

    render() {
        const { TextArea } = Input
        const { username, content } = this.state;
        const { coments} = this.props;
        return (
            <div className="addDiv">
                <label htmlFor="name">用户名：</label>
                <Input id="name"
                    style={{ height: 20 }}
                    className="content"
                    value={username}
                    onChange={(e) => {
                        // console.log(e);
                        this.setState({ username: e.target.value })
                    }} />
                <label className="label" htmlFor="content">评论内容：</label>
                <TextArea id=" content"
                    className="content"
                    rows={6} value={content}
                    onChange={(e) => this.setState({ content: e.target.value })} />
                <Button type="primary" style={{ width: 40, marginLeft: 310 }} onClick={this.add}>提交</Button>
            </div>

        );
    }






}