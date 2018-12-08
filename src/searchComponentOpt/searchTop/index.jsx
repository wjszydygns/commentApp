import React from "react"
import {Button} from "antd"
import "../../index.css"
import PropTypes from "prop-types"
import PubSub from "pubsub-js"

export default class SearchTop extends React.Component{
  state={


  };
  static propTypes={
    
  
  }
  SearchClick=()=>{
    const param=this.refs.inputValue.value;
    PubSub.publish("ClickSearch",param);   //当点击事件触发时，这个要发送数据的子组件1就发布一个
                                           //消息，然后其他需要这个数据的子组件可以订阅这个消息，订阅了这个消息的子组件
                                          //就可以拿到数据
  }
  render(){
      return(
          <div className="SearchTop">
              <h2>Search Github Users</h2>
               <input ref="inputValue"></input>
               <Button type="primary" icon="Search" onClick={this.SearchClick}>Search</Button>
          </div>
      )
  }

}