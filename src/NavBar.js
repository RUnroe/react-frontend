import React from 'react';

const NavBar = props => {
    return (
        <>
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/getapikey"}>Get a key</Link>
        </nav>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/getapikey" component={GetAPIKey}/>
            <Route exact path="/edit" component={EditData}/>
        </Switch>
        </>
    );
}
export default NavBar;