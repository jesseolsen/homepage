import React, { Component } from 'react';
import '../App.css';
import { Box, Heading } from 'grommet';
class Language extends Component {
  render() {
    return (
      <div>
        <div className="App-body">
          <p className="App-intro">
            Here are some of the programming languages I am skilled in.
          </p>

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

          <h2>
            <a name="react">React</a>
          </h2>
          <ul>
            <li>
              I helped develop HPE GreenLake Central from the ground up, in React, Redux,
              sagas, AWS, and Grommet.
            </li>
            <img
              alt="HPE GreenLake Central screenshot"
              class="shadow"
              width="1024"
              src="./images/greenlake.jpg"
            />
            <li>
              In 2017, I started holding weekly brown-bag training meetings
              about React, Grommet, and Redux.
            </li>
            <li>
              I helped a co-worker port a legacy JavaScript charting website to
              React.
            </li>
            <li>
              This website is developed with React.
            </li>
          </ul>

          <h2>
            <a name="javascript">JavaScript</a>
          </h2>
          <ul>
            <li>
              HPE OneView's GUI front-end, in JQuery and JavaScript. Focused on
              the Enclosure Manager section of the code.
            </li>
            <img
              alt="HPE OneView screenshot"
              class="shadow"
              width="1024"
              src="./images/oneview.jpg"
            />

            <li>
              Google Gadgets, such as this RedBox movies gadget that shows
              movies currently at RedBox, with links for each movie. Includes
              the ability to set preferences of what ratings to look for, and
              has the ability to watch movie previews right inside the gadget.
              Uses RSS feed to obtain movies and other information.
            </li>
            <img
              alt="RedBox App screenshot"
              class="shadow"
              max-width="100%"
              src="./images/redbox_ss.png"
            />
          </ul>

          <h2>
            <a name="go">Go</a>
          </h2>
          <ul>
            <li>Kelog logging library for HPE OneSphere.</li>
            <li>Insights for HPE OneSphere.</li>
            <img
              alt="HPE OneShpere screenshot"
              class="shadow"
              width="1024"
              src="./images/onesphere.gif"
            />
          </ul>

          <h2>
            <a name="java">Java</a>
          </h2>
          <ul>
            <li>
              HPE <a href="http://hpe.com/go/oneview">OneView</a>--for managing
              Enterprise Blade Enclosures. I worked on the back-end, which is
              developed in Java (and the front-end, which is JavaScript).
            </li>
            <li>
              Labman3--A porting of LabMan 2 (Lab Manager) to Java--to detect
              versions of fibre channel cards in hosts, and update outdated
              versions. The Hewlett-Packard Storage lab test leads got together
              to give input on their biggest pain-points, and the biggest issue
              they mentioned was updating the firmware and drivers for the fibre
              channel cards (or HBA's--Host Bus Adapters) on their hundreds of
              computers. I volunteered to develop a tool to automate the
              upgrading of their systems. LabMan (Lab Manager) was born. The
              back-end was written in Python. Its purpose was to keep a list of
              servers, and to detect information about them. If they need newer
              Fibre Channel drivers or firmware, it will crawl the web, find the
              software on Hewlett-Packard's website, download it, cache it, and
              install the software. It does this across multiple systems in
              parallel, via ssh. No client-side setup is required. LabMan
              installs the needed 3rd party tools (command-line versions) for
              updating the software.
              <ul>
                <li>
                  For the port to LabMan3 (pure Java vs. LabMan2's
                  Flex+Java+Python), currently have the GUI up...
                </li>
                <li>
                  User can enter hostname and password, and ssh connection is
                  established. Now working on obtaining:
                </li>
                <ul>
                  <li>OS</li>
                  <li>
                    HBA Vendor--Vendor of the Fibre Channel Card, also known as
                    an HBA (Host Bus Adaptor). Emulex and QLogic are the 2 major
                    HBA vendors.
                  </li>
                  <li>App--If installed, Yes, else No.</li>
                  <li>Cards--Number of HBA cards installed on the host.</li>
                  <li>Driver Version--Driver version of the HBA.</li>
                  <li>
                    Driver Target--Target (most recent) Driver version of the
                    HBA, per hpe.com.
                  </li>
                  <li>FW Version--Firmware version of the HBA.</li>
                  <li>
                    FW Target--Target (most recent) Firmware version of the HBA,
                    per hpe.com.
                  </li>
                </ul>
              </ul>
              <img
                alt="labman3 screenshot"
                class="shadow"
                max-width="100%"
                src="./images/labman3.png"
              />
              <br />
              To find what drivers/fw to download, LabMan crawls the web,
              looking for the latest versions of the drivers/fw. Here are sample
              pages that would be crawled on hpe.com:
              <ul>
                <li>
                  <a href="https://support.hp.com/us-en/drivers/">
                    Drivers Download page
                  </a>{' '}
                  Here the crawler enters the HBA model that it discovered by
                  sending an ssh command to the host.
                </li>
                <li>
                  <a href="https://support.hpe.com/hpsc/swd/public/detail?sp4ts.oid=3883276&swItemId=MTX_b2cf2c8b38b341f5ad95ef36bb&swEnvOid=4184">
                    Specific HBA (Host Bust Adapter) page
                  </a>{' '}
                  The crawler finds the specific HBA...
                </li>

                <li>
                  <a href="http://h20564.www2.hpe.com/hpsc/swd/public/readIndex?sp4ts.oid=3883276&amp;swLangOid=8&amp;swEnvOid=4049">
                    Specific HBA and OS page
                  </a>{' '}
                  ...and OS. From this page the crawler finds the top version,
                  which is the latest version available on the the{' '}
                  <a href="https://support.hpe.com/hpsc/doc/public/display?sp4ts.oid=412183&docId=emr_na-c03672405&docLocale=en_US">
                    EBS Matrix.
                  </a>
                </li>
              </ul>
            </li>
            <li>
              LabMan2 -- BlazeDS/Flex (Java+Flex) based GUI with Python back end
              for automating lab management tasks
            </li>
            <ul>
              <li>
                Craw the web (hpe.com) for latest FW/Drivers and download them
              </li>
              <li>Update Fibre-channel card adapter FW</li>
              <li>Update Fibre-channel card adapter Drivers</li>
            </ul>
            <li>
              DBMan -- Put together a prototype--Flex/BlazeDS based GUI for
              managing a set of multi-terrabyte DataBases (Orale and SQL)
            </li>
            <li>
              Helett-Packard WSDL Service Composer -- WSDL Schema editor
              developed in Java/JGo
            </li>

            <img
              class="shadow"
              src="./images/ServiceComposer.jpg"
              width="716"
              height="657"
              alt="service composer screenshot"
            />

            <li>
              BYU Masters Thesis: Application Independent Undo at the Java
              Byte-Code Level.
            </li>
          </ul>

          <h2>
            <a name="python">Python</a>
          </h2>
          <ul>
            <li>
              HPE OneView Python API -- HPE's OneView for managing Enterprise
              Blade Enclosures has a Python API for automating OneView, which I
              worked on. Here is the API on{' '}
              <a href="https://github.com/HewlettPackard/python-hpOneView">
                Git Hub
              </a>. I worked specifically on the code to modify the IP address,
              found in{' '}
              <a href="https://github.com/HewlettPackard/python-hpOneView/blob/1a64188bd86bf7ddfb30a9bca1b59fd49c3aefd5/examples/physical-regression.py">
                this
              </a>{' '}
              file.
            </li>
            <li>
              LabMan2 -- Our lab test leads got together to give input on their
              biggest pain-points, and the biggest issue they mentioned was
              updating the firmware and drivers for the fibre channel cards (or
              HBA's--Host Bus Adapters) on their hundreds of computers. I
              volunteered to develop a tool to automate the upgrading of their
              systems. LabMan (Lab Manager) was born. The back-end is written in
              Python. Its purpose is to keep a list of servers, and to detect
              information about them. If they need newer Fibre Channel drivers
              or firmware, it will crawl the web, find the software on
              Hewlett-Packard's website, download it, cache it, and install the
              software. It does this across multiple systems in parallel, via
              ssh. No client-side setup is required. LabMan installs the needed
              3rd party tools (command-line versions) for updating the software.
            </li>
            For the front-end, I wanted to learn Flex, so I did some
            investigation and showed my manager an early prototype. He was
            supportive of my working on this on the side, in addition to my
            primary development tasks, such as DataMover. Here is a Flex
            front-end interface that shows what information is gathered for the
            QLogic and Emulex HBA cards:
            <img
              class="shadow"
              src="./images/labman.jpg"
              width="1154"
              height="444"
              alt="labman screenshot"
            />
            <br />
            To find what drivers/fw to download, LabMan crawls the web, looking
            for the latest versions of the drivers/fw. Here are sample pages
            that would be crawled on hpe.com:
            <ul>
              <li>
                <a href="http://www8.hpe.com/us/en/drivers.html">
                  Drivers Download page
                </a>{' '}
                Here the crawler enters the HBA model that it discovered by
                sending an ssh command to the host.
              </li>
              <li>
                <a href="http://h20564.www2.hpe.com/hpsc/swd/public/readIndex?sp4ts.oid=3883276&amp;lang=en&amp;lang=en&amp;cc=us&amp;cc=us">
                  Specific HBA page
                </a>{' '}
                The crawler finds the specific HBA...
              </li>

              <li>
                <a href="http://h20564.www2.hpe.com/hpsc/swd/public/readIndex?sp4ts.oid=3883276&amp;swLangOid=8&amp;swEnvOid=4049">
                  Specific HBA and OS page
                </a>{' '}
                ...and OS. From this page the crawler finds the top version,
                which is the latest version available on the the{' '}
                <a href="https://support.hpe.com/hpsc/doc/public/display?sp4ts.oid=412183&docId=emr_na-c03672405&docLocale=en_US">
                  EBS Matrix.
                </a>
              </li>
            </ul>
            <li>
              DataMover -- I am also supporting a tool called DataMover. One of
              the versions of DataMover was written in Python.
            </li>
            <li>
              All-in-One (printer/fax/scanner) dependency based build framework
              -- While at Hewlett-Packard in San Diego, I helped build a
              second-generation dependency based build environment in Python,
              when a new manager introduced our team to the language.
            </li>
          </ul>

          <h2>
            <a name="perl">Perl</a>
          </h2>
          <ul>
            <li>DataMover developed in Perl</li>
            <li>HealthMonitor developed in Perl, PHP, and HTML:</li>
            <img
              alt="health monitor screenshot"
              class="shadow"
              src="./images/healthMonitor.png"
              max-width="100%"
            />
            <li>
              DataBase modification script--modify Oracle DB using Perl and SQL.
              Modify/Delete X% of DB.
            </li>
          </ul>

          <h2>
            <a name="cpp">C/C++</a>
          </h2>
          <ul>
            <li>
              DataMover has C++ component. I've done some of the C++ work for
              DataMover as well as the Perl code.
            </li>
            <li>
              OpenStudio was a project I worked on where we created an add-on to
              Microsoft's Visual Studio enabling a developer to write code and
              debug for the HP-UX Unix platform.
            </li>
            <img
              class="shadow"
              src="./images/OpenStudio.jpg"
              width="660"
              height="478"
              alt="OpenStudio screenshot"
            />

            <li>
              My Personal Tutor--Joint venture with Microsoft and Waterford
              Institute. Visual C++. Here is a youTube video about{' '}
              <a href="http://www.youtube.com/watch?v=wOqi7MevagE">
                My Personal Tutor{' '}
              </a>{' '}
              -- by Microsoft and Waterford Institute
            </li>

            <img
              class="shadow"
              src="./images/Waterford.jpg"
              width="480"
              height="360"
              alt="Waterford Logo"
            />
            <li>
              Back in 1998 I joined Hewlett-Packard on the Ignite-UX team (the
              HP-UX install tool), and worked in C as well as Unix Scripting...
            </li>
            <img
              class="shadow"
              src="./images/ignite-ux.jpg"
              width="459"
              height="276"
              alt="Ignite-UX screenshot"
            />
          </ul>

          <h2>
            <a name="cs">C#</a>
          </h2>
          <ul>
            <li>
              C# -- At Hewlett-Packard in San Diego, I led the effort in
              designing and implementing a new dependency based build system in
              the All-in-One (printer/fax/scanner) group in C#. The build team
              had a legacy system where over 100 modules were built in sequence,
              dependent upon all modules before it being built. I designed and
              implemented a new build environment that relied on dependencies
              between modules to allow single modules to be built, including the
              modules they depended upon.
            </li>
          </ul>

          <h2>
            <a name="powershell">MS PowerShell</a>
          </h2>
          <ul>
            <li>
              I led a small group of developers in the creation of a testing
              framework using Microsoft's PowerShell.
            </li>
          </ul>

          <h2>
            <a name="android">Android</a>
          </h2>
          <ul>
            <li>
              Quote of the day... on Android! A new quote each day, right in the
              palm of your hand...
            </li>

            <img
              class="shadow"
              src="./images/android.png"
              width="320"
              height="480"
              alt="androind screenshot"
            />
          </ul>

          <h2>
            <a name="ios">iOS</a>
          </h2>
          <ul>
            <li>
              Quote of the day... on iOS (Objective-C)! A new quote each day,
              right in the palm of your hand...
            </li>
            <img
              class="shadow"
              src="./images/ios.jpeg"
              width="320"
              height="480"
              alt="iOS screenshot"
            />
          </ul>

          <h2>
            <a name="windows8">Windows 8/HTML5/JavaScript</a>
          </h2>
          <ul>
            <li>
              A Windows 8 Store app, built using HTML5 and JavaScript, where a
              different quote is shown each day, and you try to guess what movie
              the quote is from...
            </li>
            <img
              class="shadow"
              src="./images/Windows8.jpg"
              width="700"
              height="320"
              alt="Windows8 screenshot"
            />
          </ul>

          <h2>
            <a name="javame">Java ME</a>
          </h2>
          <ul>
            <li>
              In 2005, I created a Java ME (Mobile Edition) app--A list of
              gluten free foods. Features included searches, navigation, jumping
              to listed web pages and calling phone numbers listed in the app.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Language;
