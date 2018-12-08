import React from "react"
import {Button} from "antd"
import "../../index.css"
import PropTypes from "prop-types"

export default class SearchTop extends React.Component{
  state={


  };
  static propTypes={
    setSearchName:PropTypes.func.isRequired,
    searchName:PropTypes.string.isRequired,
  }
  SearchClick=()=>{
    const {setSearchName}=this.props;
    //子组件一点击搜索，就会拿到input的值，并且传给父组件，调用父组件中的方法来改变父组件中的state
    setSearchName(this.refs.inputValue.value);
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