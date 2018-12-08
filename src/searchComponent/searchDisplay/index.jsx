import React from "react"
import { List, Card } from "antd"
import "../../index.css"
import axios from "axios"


export default class SearchDisplay extends React.Component {
    state = {
        ListData: [],
        initView: true,
        loading: false,
        errormsg: null,
    };

    componentWillReceiveProps(newprops) {
      
        if (newprops.searchName) {
            //接收的searchName变了。第一要更新状态，并且请求数据
            this.setState({
                initView: false,
                loading: true
            })
            this.requestData(newprops.searchName);
        }
    };


    requestData = (searchName) => {
        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then(res => {
                console.log(res);
                const users = res.data.items.map(item => {
                    return {
                        name: item.login,
                        avatarUrl: item.avatar_url,
                        url: item.html_url
                    }
                })
                this.setState({
                    ListData:users,   //拿到了用户的信息对象
                    loading: false
                })
            }).catch(error => this.setState({ errormsg: error,loading:false }));
    }



    render() {
        const { ListData, initView, loading, errormsg } = this.state;
        const { searchName } = this.props;
        if (initView) {
            return (
                <div className="SearchDisplay">
                    <h2>请输入关键字进行搜索</h2>
                </div>)
        }
        else if (loading) {
            return (
                <div className="SearchDisplay">
                    <h2>Loading</h2>
                </div>)
        }
        else if (errormsg) {
            return (
                <div className="SearchDisplay">
                    <h2>{errormsg}</h2>
                </div>)
        }
        else {
            return (
                <div className="SearchDisplay">
                    <List
                        itemLayout="horizontal"
                                    
                        grid={{ column: 3, gutter: 2 }}
                        dataSource={ListData}
                        renderItem={item => (
                            <List.Item>
                                <Card style={{textAlign:"center"}}
                                      title={item.name}>
                                    <a href={item.url}>
                                        <img src={item.avatarUrl} style={{ width: 100 }} alt="加载失败" />
                                    </a>
                                    {item.content}
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>

            )
        }
    }

}