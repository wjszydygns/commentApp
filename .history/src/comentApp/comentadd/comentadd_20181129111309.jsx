import React, { Component } from "react"
import "../../index.css"
import { Input, Row, Col, Button } from "antd"

export default class ComentAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",
            content:"",

        }
    }
    render() {
        const { TextArea } = Input
        const {name,content}=this.state;
        return (
            <div className="addDiv">
                <label htmlFor="name">用户名：</label>
                <Input id="name" 
                 style={{ height: 20 }} 
                 className="content" 
                 value={name} 
                  onChange={(name)=>{

                    this.setState({name})
                  }}/>
                <label className="label" htmlFor="content">评论内容：</label>
                <TextArea id=" content" className="content" rows={6}   value={content}/>
                <Button type="primary" style={{ width: 40, marginLeft: 310 }} onClick={this.add}>提交</Button>
            </div>

        );
    }






}