import React, { Component } from 'react';
import { Anchor, Box, Heading } from 'grommet';

import '../App.css';

class Technologies extends Component {
  render() {
    return (
      <div>
        <div className="App-body">
          <p className="App-intro">
            This is a portfolio showing some of the software development I have
            done over the years, at work as well as at home.
          </p>

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

          <h2>ELK Stack -- (Elasticsearch, Logstash, Kibana)</h2>
          <div>
            Used while developing HPE OneSphere and HPE's Helion OpenStack. Used
            Logstash with OpenStack, and Fluentd in HPE OneSphere. Configured
            the ELK stack for storing of centralized logs. Also created Kibana
            dashboards to monitor the deployment log files.
            <div>
              <img
                class="shadow"
                src="./images/kibana.gif"
                alt="Kibana screenshot"
              />
            </div>
          </div>

          <h2>Chameleon</h2>
          <div>
            I came up with an idea I call Chameleon: An IDE plug-in where you
            type what you want the code to do, in English, and the plug-in
            (Chameleon) will write the code for you in whatever programming
            language you are working in. I have started this and open sourced
            it. See the source code and demo videos on GitHub:{' '}
            <Anchor
              label="Chameleon"
              href="https://github.com/ChameleonPlugins/chameleon-templates"
            />
            <div>
              <img src="./images/chameleon.png" alt="Chameleon Logo" />
            </div>
          </div>

          <h2>Kubernetes</h2>
          <div>
            Used while developing HPE OneSphere. Kubernetes allows starting
            multiple microservices for an enterprise product environment, such
            as HPE OneSphere. It automatically restarts Pods, running Docker
            containers, should they fail, providing HA (High Availability) and
            scale. Created side-car pods to add logging and retention support,
            etc. Created HELM Charts for installing Kubernetes microservices.
            <div>
              <img src="./images/kubernetes.png" alt="Kubernetes Logo" />
            </div>
          </div>

          <h2>Docker</h2>
          <div>
            Used while developing HPE OneSphere. I created docker containers for
            various components, including elasticsearch trimming and the:{' '}
            <Anchor
              label="HPE OneView chat bot environment"
              href="https://github.com/HewlettPackard/hpe-oneview-hubot"
            />
            <div>
              <img src="./images/docker.png" alt="Chameleon Logo" />
            </div>
          </div>

          <h2>OpenStack</h2>
          <div>
            Used while developing HPE's Helion OpenStack. I was on the
            centralized logging and auditing team.
            <div>
              <img src="./images/openstack.png" alt="OpenStack Logo" />
            </div>
          </div>

          <h2>Ansible</h2>
          <div>
            Used while developing Helion OpenStack to organize and orchestrate
            the HPE OpenStack installation and deployment.
            <div>
              <img src="./images/ansible.png" alt="Ansible Logo" />
            </div>
          </div>

          <h2>Oracle DataBase</h2>
          <div>
            Oracle Certified Professional certification obtained for Oracle
            Database in 2012.
            <div>
              <img
                class="shadow"
                src="./images/oracle.png"
                alt="Oracle Certified Professional Logo"
              />
            </div>
          </div>

          <h2>VMWare</h2>
          <div>
            Manage ESX server. Mostly Linux and Windows VMs.
            <div>
              <img src="./images/vmware.png" alt="VMWare Logo" />
            </div>
          </div>

          <h2>VirtualBox</h2>
          <div>
            Use VirtualBox for managing virtual machines.
            <div>
              <img src="./images/virtualbox.png" alt="VirtualBox Logo" />
            </div>
          </div>

          <h2>OSes</h2>
          <div>
            Use Windows, Linux, and Macs at work and home, as well as Android
            and iOS. I use mostly Ubuntu Linux, as well as some Red Hat and
            SuSE. Back in 1989 I was on HP's HP-UX's Ignite-UX (install) team.
            <div>
              <img src="./images/oses.jpg" alt="OS Logos" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Technologies;
