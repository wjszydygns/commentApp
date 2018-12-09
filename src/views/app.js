import React from "react"
import { NavLink, Route, Redirect, BrowserRouter as Router, Switch } from "react-router-dom"
import ComentApp from "./comentAppOpt/app/app"
import SearchOpt from "./searchComponentOpt/index"
import { Layout,Menu } from "antd"
import "../index.css"


export default class App extends React.Component {



    render() {
        const { Header, Footer, Sider, Content} = Layout;
        return (
            <div>
                <Layout>
                    <Header  style={{display:"inline"}}>

                              
                
                            <NavLink to="/search" className="list-group-item" >search</NavLink>
                       
                             <NavLink to="/coment"  className="list-group-item" >coment</NavLink>
                    

                    </Header>
                    <Layout>
                        <Content>
                            <Switch>
                                <Route path="/coment" component={ComentApp}></Route>
                                <Route path="/search" component={SearchOpt}></Route>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )

    }
}