import React, { Component } from "react";
import styled from "styled-components";
import Home from "./../Home";
import About from "./../About";
import { Route, Link } from "react-router-dom";
import "./navigation.css";

const yellow = "#fce21b";
const reallyReallyDarkGrey = "#333";

export const TopBar = styled.div`
  position: fixed;
  background-color: #181818;
  height: 74px;
  width: 100%;
  z-index: 98;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  margin: auto;
`;

const Logo = styled.div`
  margin-top: 15px;
  color: ${yellow};
  font-size: 30px;
  font-weight: 800;
`;

const NavButton = styled.div`
  margin-left: 24px;
  margin-top: 24px;
  color: ${yellow};
`;

const AboutNavButton = styled(NavButton)`
  margin-left: auto;
`;

const Feedback = styled(NavButton)``;

const Contribute = styled(NavButton)``;

const Report = styled(NavButton)`
  margin-top: 14px;
  background-color: ${yellow};
  padding: 12px 16px 14px 16px;
`;

const YellowLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: ${yellow};
`;

const DarkGreyLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: ${reallyReallyDarkGrey};
`;

const Content = styled.div`
  padding-top: 74px;
`;

class Navigation extends Component {
  render() {
    return (
      <div className="app-body" align="center">
        <TopBar>
          <Header>
            <Logo>
              <Link className="navigation-link" to={"/"}>
                Crystal
              </Link>
            </Logo>
            <AboutNavButton>
              <Link className="navigation-link" to={"/about"}>
                About
              </Link>
            </AboutNavButton>
            <Contribute>
              <YellowLink
                href="https://join.slack.com/t/crystalpolice/shared_invite/zt-essyn1xu-G5CAEuWgvSaZ04iIQ11FCQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss on Slack
              </YellowLink>
            </Contribute>
            <Feedback>
              <YellowLink
                href="https://docs.google.com/spreadsheets/d/1_8sFcTwqlBvVgd7XTekIdBGQnMdyAnB5qxuKObwdauw/edit#gid=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Give Feedback
              </YellowLink>
            </Feedback>
            <Report>
              <DarkGreyLink
                href="https://forms.gle/S4ohosYKn6NUQcps8"
                target="_blank"
                rel="noopener noreferrer"
              >
                + Add Report
              </DarkGreyLink>
            </Report>
          </Header>
        </TopBar>
        <Content style={{ flexGrow: "1" }}>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route exact={true} path="/about">
            <About />
          </Route>
        </Content>
      </div>
    );
  }
}

export default Navigation;
