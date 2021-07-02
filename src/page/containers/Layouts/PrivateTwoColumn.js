import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button, Card, NavItem, NavLink } from 'reactstrap';

import AdminLTE, {
    Layout,
    Sidebar,
    Navbar,
    Nav,
    NavToggle
} from '../../../adminlte';
import { ToastContainer } from 'react-toastify';

const PrivateTwoColumns = ({ children, header, sidebar, className }) => {
    return (
        <Layout.Wrapper className={className}>
            <ToastContainer autoClose={5000} />
            <Navbar light>
                <Nav>
                    <NavItem>
                        <NavToggle onClick={() => {
                            const classList = document.querySelector('body').classList;
                            if (!classList.contains('sidebar-collapse')) {
                                classList.add('sidebar-collapse');
                            } else {
                                classList.remove('sidebar-collapse');
                            }
                        }} />
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
                <Navbar.MiniSearch />
                <Nav className="ml-auto">
                    <Nav.Item>
                        {/* Fix the icon and badge here, we may pass it as children */}
                        <Nav.Dropdown icon={() => (<i className="far fa-comments" />)} badge={() => (<span className="badge badge-danger navbar-badge">5</span>)} >
                            <Nav.Dropdown.Item>
                                {/* Message Start */}
                                <div className="media">
                                    <img src="https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Brad Diesel
                                        <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                                        </h3>
                                        <p className="text-sm">Call me whenever you can...</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                    </div>
                                </div>

                                {/* Message End */}
                            </Nav.Dropdown.Item>
                            <Nav.Dropdown.Divider />
                            <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                        </Nav.Dropdown>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Dropdown icon={() => (<img className="rounded-circle" src="" width={24} height={24} />)}>
                        </Nav.Dropdown>
                    </Nav.Item>
                </Nav>
            </Navbar>
            {/* Sidebar */}
            <Sidebar>
                <Sidebar.UserInfo>
                    <Sidebar.UserInfo.Avatar avatar="" />
                    <Link to="/user/profile">
                        <Sidebar.UserInfo.Name fullName="" />
                    </Link>
                </Sidebar.UserInfo>
                <Sidebar.Search />
                <Sidebar.Nav>
                    <Sidebar.TreeMenu icon="fas fa-list" title="Catalog" active>
                        <Sidebar.MenuItem icon="fas fa-tachometer-alt">
                            <Link to="/user/dashboard">Dashboard</Link>
                        </Sidebar.MenuItem>
                        <Sidebar.MenuItem icon="nav-icon fas fa-th" badge>
                            <Link to="/sales-text">Sales Text</Link>
                        </Sidebar.MenuItem>
                        <Sidebar.MenuItem icon="nav-icon fas fa-network-wired" badge>
                            <Link to="/category-deals">Category Deals</Link>
                        </Sidebar.MenuItem>
                    </Sidebar.TreeMenu>
                    <Sidebar.MenuItem icon="nav-icon fas fa-users">
                        Customers
                </Sidebar.MenuItem>
                    <Sidebar.TreeMenu icon="fas fa-industry" title="Amazon Web Services">
                        <Sidebar.MenuItem>
                            <Link to="/aws/rules">Whitelist Ips</Link>
                        </Sidebar.MenuItem>
                    </Sidebar.TreeMenu>
                    <Sidebar.TreeMenu icon="fas fa-dolly-flatbed" title="Inventory">
                        <Sidebar.MenuItem icon="fas fa-exclamation-circle">
                            <Link to="/inventory/list">IMS</Link>
                        </Sidebar.MenuItem>
                    </Sidebar.TreeMenu>
                    <Sidebar.TreeMenu icon="fas fa-bullhorn" title="Marketing">
                        <Sidebar.MenuItem icon="fas fa-images">
                            <Link to="/banner/1/desktop/main">Banners</Link>
                        </Sidebar.MenuItem>
                        <Sidebar.MenuItem icon="fas fa-book">
                            <Link to="/buying/list">Buying Guide</Link>
                        </Sidebar.MenuItem>
                    </Sidebar.TreeMenu>
                    <Sidebar.TreeMenu icon="fas fa-bell" title="Watch">
                        <Sidebar.MenuItem icon="fas fa-exclamation-triangle">
                            <Link to="/ams/alerts/list">AMS</Link>
                        </Sidebar.MenuItem>
                    </Sidebar.TreeMenu>
                    <Sidebar.TreeMenu icon="fas fa-bell" title="Quote Management System">
                        <Sidebar.MenuItem icon="fas fa-exclamation-triangle">
                            <Link to="/qms">Quote Grid</Link>
                        </Sidebar.MenuItem>
                    </Sidebar.TreeMenu>
                    <Sidebar.TreeMenu icon="fas fa-user" title="Admin">
                        <Sidebar.MenuItem icon="fas fa-users">
                            <Link to="/user/management">Users</Link>
                        </Sidebar.MenuItem>
                        <Sidebar.MenuItem icon="fas fa-user-lock">
                            <Link to="/user/roles">Roles</Link>
                        </Sidebar.MenuItem>
                        <Sidebar.MenuItem>Permissions</Sidebar.MenuItem>
                    </Sidebar.TreeMenu>
                </Sidebar.Nav>
            </Sidebar>
            {/* Content goes here */}
            { children}

            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark">
                {/* Control sidebar content goes here */}
                <div className="p-3">
                    <h5>Title</h5>
                    <p>Sidebar content</p>
                </div>
            </aside>
            {/* /.control-sidebar */}
            {/* Main Footer */}
            <footer className="main-footer">
                {/* To the right */}
                <div className="float-right d-none d-sm-inline">
                    Anything you want
                </div>
                {/* Default to the left */}
                <strong>Copyright © 2014-2021 <a href="https://adminlte.io">Renegade Furniture Group</a>.</strong> All rights reserved.
            </footer>
        </Layout.Wrapper>
    );
}

export default PrivateTwoColumns;