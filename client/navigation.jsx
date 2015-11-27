import React from 'react'
import { Link } from 'react-router'
import { AppBar, LeftNav, MenuItem } from 'material-ui';

module.exports = React.createClass({
    render() {
        return (
            <div>
                <AppBar
                    title="App Title"
                    onLeftIconButtonTouchTap={this.toggleMenu}/>
                <LeftNav ref="leftNav" docked={false}>
                    <MenuItem index={0}><Link to="/">Home</Link></MenuItem>
                    <MenuItem index={1}><Link to="about">About</Link></MenuItem>
                </LeftNav>
                {this.props.children}
            </div>
        );
    },

    toggleMenu() {
        this.refs.leftNav.toggle();
    }
});
