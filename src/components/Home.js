import React, { Component } from 'react';
import { Box, Heading } from 'grommet';

import '../App.css';

class Home extends Component {
  render() {
    return (
      <Box>
        <Box className="App-body">
          <p className="App-intro">
            This is a portfolio showing some of the software development I have
            done over the years, at work as well as at home.
          </p>

          <img
            alt="HPE GreenLake Central screenshot"
            class="shadow"
            width="1024"
            src="./images/greenlake-react.jpg"
          />

          <h2>
            <a name="intro">Introduction</a>
          </h2>
          <ul>
            <li>Employers</li>
            <ul>
              <li>
                <a href="http://hpe.com/">Hewlett-Packard Enterprise (HPE)</a>{' '}
                  (current employer)
              </li>
              <li>
                <a href="http://www.waterford.org/">Waterford Institute</a>{' '}
                (multi-media educational software non-profit organization).
              </li>
            </ul>
          </ul>
          <ul>
            <li>
                Teaching--For years I have held technical training sessions over lunch
                each week on items such as React, Grommet, and Redux.
            </li>
            <li>
                Learning--I am continually reading/studying to learn
                different technologies. In December 2012 I received my Oracle
                Certified Professional certification.
            </li>
            <li>
                Test driven development--JUnit, PyUnit, NUnit, QUnit, Mockito,
                Power Mock, Perl unit tests
            </li>
            <li>
                Agile--Scrum, eXtreme Programming
            </li>
          </ul>

          <h2>
            <a name="languages">Languages Overview</a>
          </h2>
          <ul>
            <li>
              React -- Started holding weekly brown-bag training meetings about
              React, Grommet, and Redux in 2017. Helped co-worker port legacy
              JavaScript charting website to React. This website is developed
              with React.
            </li>
            <li>
              JavaScript -- HPE OneView GUI (JQuery/JavaScript); Various
              JavaScript items, such as iGoogle Google Gadgets.
            </li>
            <li>Go -- Kelog logging library for HPE OneSphere.</li>
            <li>
              Java -- HPE OneView back-end development; Labman3--A porting of
              LabMan 2 (Lab Manager) to Java--to detect versions of fibre
              channel cards in hosts, and update outdated versions; XML Schema
              editor in Java/JGo; BlazeDS (Flex/Java) for tools such as
              DataMover config file editor, LabMan2, and DBMan. My Masters
              Thesis dealt with Java byte-code.
            </li>
            <li>
              Python -- HPE OneView Python API; LabMan 2 (LabManager) tool for
              updating Fibre Channel card firmware and drivers for multiple
              servers, supported versions of DataMover tool in Python, and
              worked on a second-generation All-in-One (printer/fax/scanners)
              dependency based build framework.
            </li>
            <li>
              Perl -- DataMover developed in Perl. Worked on maintaining and
              extending HealthMonitor, which was in Perl, PHP, and HTML.
              Extended and maintained DataBase modification script which was
              written in Perl for Oracle and MS SQL databases.
            </li>
            <li>
              C++ -- DataMover is also in C++. I've done some of the C++ work
              for DataMover as well. OpenStudio was in C++. Work at Waterford
              Institute was in Visual C++.
            </li>
            <li>
              C# -- At Hewlett-Packard in San Diego, I led the effort in
              designing and implementing a new dependency based build system in
              the All-in-One (printer/fax/scanner) group in C#.
            </li>
            <li>
              MS PowerShell -- I led a small group of developers in the creation
              of a testing framework using Microsoft's PowerShell.
            </li>
          </ul>

          <h2>Technologies</h2>
          <ul>
            <li>
              ELK Stack -- (Elasticsearch, Logstash, Kibana) Used while
              developing HPE OneSphere and HPE's Helion OpenStack
            </li>
            <li>
              Kubernetes -- Used while developing HPE OneSphere and HPE's Helion
              OpenStack
            </li>
            <li>Docker -- Used while developing HPE OneSphere</li>
            <li>OpenStack -- while developing Helion OpenStack</li>
            <li>Ansible -- while developing Helion OpenStack</li>
            <li>
              Oracle DataBase -- Oracle Certified Professional certification in
              2012.
            </li>
            <li>
              VMWare -- Manage ESX server -- Mostly Windows and Red Hat VMs.
            </li>
            <li>VirtualBox -- Windows 8, OS X, etc.</li>
            <li>
              OSes -- Windows, Linux (Ubuntu, Red Hat, SuSE), Mac, Android, iOS,
              and HP-UX.
            </li>
          </ul>
        </Box>
      </Box>
    );
  }
}

export default Home;
