import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import RootScene from './Scene/RootScene'
import AddPostScene from "./Scene/AddPostScene/index";
import DetailPostScene from "./Scene/DetailPostScene/DetailPostScene";
import EditPostScene from "./Scene/EditPostScene/EditPostScene";
import PostListView from "./Scene/PostListScene/index";
import NavBar from "./NavBar";

class App extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={NavBar}/>
                        <Route path="/:categoryName?" component={NavBar}/>
                    </Switch>
                    <Switch>
                        <Route exact path="/" component={RootScene}/>
                        <Route exact path="/category/:categoryName?" component={PostListView}/>
                        <Route exact path="/add/post" component={AddPostScene}/>
                        <Route exact path="/edit/post/:idPost" component={EditPostScene}/>
                        <Route exact path="/:category/:idPost" component={DetailPostScene}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}


export default (App);
