import 'utils/object-polyfills'
import ReactDom from "react-dom"
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"

import { createBrowserHistory } from "history" // URL模式的history


import asyncComponent from "utils/asyncComponent"
const Home = asyncComponent(() => import("./home"))
const About = asyncComponent(() => import("./about"))

const routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={Home} />
        </Switch>
    </BrowserRouter>
)

const renderDom = () => {
  
    return routes()
  
}

ReactDom.render(
    renderDom(),
    document.getElementById("app")
)
