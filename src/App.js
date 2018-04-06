import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import RootScene from './Scene/RootScene'
import DetailPostScene from "./Scene/DetailPostScene/index";
import PostListView from "./Scene/PostListScene/index";
import NavBar from "./NavBar";
import ControlPostForm from "./post/components/ControlPostForm";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={RootScene}/>
                        <Route exact path="/:categoryName?" component={PostListView}/>
                        <Route exact path="/add/post" component={ControlPostForm}/>
                        <Route exact path="/edit/post/:idPost" component={ControlPostForm}/>
                        <Route exact path="/:category/:idPost" component={DetailPostScene}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}


export default (App);
