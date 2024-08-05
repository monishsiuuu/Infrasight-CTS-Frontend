import React from "react";
import '../css/home.css';
import Background from "../assests/i4.jpg";
import card1 from "../assests/back2.jpg"
import card3 from "../assests/back3.jpg"
import efficiencyimage from "../assests/back2.jpg";


const HomePage = () => {
    return (
        <div>

            <div className="home-container">
                <h1 className="home-title">Monitor your Servers with <br></br> Infrasights Advanced Tools</h1>
                <p className="home-description">Infrasight provides comprehensive server monitoring solution to help you keep track of your <br></br>servers performance and ensure smooth operations</p>
                <div className="row">
                    <div className="col-md-6">
                        <button className="learn-more">Learn more</button>
                    </div>
                    <div className="col-md-6">

                        <button className="signup-redirect"><a href="/login">Signup</a></button>
                    </div>
                </div>
            </div>
            <div className="home-image-container">
                <img className="home-image" src={efficiencyimage} alt="" />
            </div>


            {/* Add a spacer or some content to create space */}
            <div className="spacer"></div>

            <div className="services-container">
                <p className="home-description">Simplified</p>
                <h1 className="home-title">
                    Effortlessly Moniter Your Servers <br></br> with Infrasight
                </h1>
                <p className="home-description">
                    Infrasight provides comprehensive server monitoring solution that allows you to easily keep <br />track of your server's performance and statistics. With our user-friendly interface and real-time <br></br> updates, you can stay on the top of your server health and make informed decision
                </p>

                {/* BOX-SECTION */}

                <div className="row">
                    <div id='box' className="col">
                        <i id="icon-spacing" className="fa fa-cube fa-3x" aria-hidden="true"></i>
                        <h1 className="box-title">
                            Real-time Server <br></br> Monitoring and  <br></br> Performance Analysis
                        </h1>
                        <p className="box-description">
                            Get instant insights into your server performance and <br></br> identify potential issues before they impact your<br></br> business
                        </p>
                    </div>
                    <div id='box' className="col">
                        <i id="icon-spacing" className="fa fa-cube fa-3x" aria-hidden="true"></i>
                        <h1 className="box-title">
                            Customizable Alerts and <br></br>  Notification
                        </h1>
                        <p className="box-description">
                            Set up personalized alerts to recieve notification when your<br></br> server experiences anomalies or downtime
                        </p>
                    </div>
                    <div id='box' className="col">
                        <i id="icon-spacing" className="fa fa-cube fa-3x" aria-hidden="true"></i>
                        <h1 className="box-title">
                            Efficient troubleshooting <br></br> and Root cause Analysis
                        </h1>
                        <p className="box-description">
                            Quickly identify the root cause of server issues and resolve<br></br> them to maintain downtime and maximize the<br></br> performance
                        </p>
                    </div>

                </div>

                <div className="service-alignment-container">
                    <div className="row">
                        <div className="col-md-6">
                            <button className="learn-more1">Learn more</button>
                        </div>
                        <div className="col-md-6">
                            <button className="signup-redirect1"><a href="/login">Sign Up </a></button>
                        </div>
                    </div>
                </div>

                <div id="efficiency-container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col">
                            <p className="efficiency-description">Efiiciency</p>
                            <h2 className="efficiency-title">Optimize your Server <br></br>performance with <br></br>Infrasight</h2>
                        </div>
                        <div className="col">
                            <p className="efficiency-description">Infrasights server monitoring solution provides realtime insights into your servers, allowing you to identify and resolve issues before they impact your business with our comprehensive dashboard, you can easily track server performance, analyze trends, and make data-driven decision to improve efficiency and maximize uptime</p>
                            <div className="efficiency-alignment-container">
                                <div className="row">
                                    <div className="col-md-3">
                                        <button className="learn-more1">Learn more</button>
                                    </div>
                                    <div className="col-md-3">
                                        <button className="signup-redirect1"><a href="/login">Sign Up </a></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div>
                        <img className="efficiency-image" src={efficiencyimage} alt="" />
                    </div>
                </div>

                {/* SERVICES */}
                <div className="insights-container">
                    <p className="home-description">Services</p>
                    <h1 className="home-title">Look at the services<br></br> we provide!</h1>
                    <p className="home-description">Be secure , safe and productive with the services of Infrasight</p>
                </div>

                {/* SERVICE ICONS */}
                <div className="services-icons">
                    <div className="row">
                        <div className="col">
                            <i id="icon-spacing" className="fa fa-computer fa-4x" aria-hidden="true"></i>
                            <h2 className="icon-font">Performance Monitering</h2>
                        </div>
                        <div className="col">
                            <i id="icon-spacing" className="fa fa-lock fa-4x" aria-hidden="true"></i>
                            <h2 className="icon-font">Security Monitering</h2>
                        </div>
                        <div className="col">
                            <i id="icon-spacing" className="fa fa-virus fa-4x" aria-hidden="true"></i>
                            <h2 className="icon-font">Malware detection</h2>
                        </div>
                        {/* </div> */}
                        {/* <div className="space1"></div> */}
                        {/* <div className="row"> */}
                        <div className="col">
                            <i id="icon-spacing" className="fa fa-bar-chart fa-4x" aria-hidden="true"></i>
                            <h2 className="icon-font">Scaling up</h2>
                        </div>
                        <div className="col">
                            <i id="icon-spacing" className="fa fa-robot fa-4x" aria-hidden="true"></i>
                            <h2 className="icon-font">Automation</h2>
                        </div>
                    </div>
                </div>


                {/* INSIGHTS */}

                <div className="insights-container">
                    <p className="home-description">Insights</p>
                    <h1 className="home-title">Discover the Latest Trends!</h1>
                    <p className="home-description">Stay informed with the informative blog post</p>
                </div>

                {/* INSIGHT CARDS */}

                <div id="insight-cards" className="row">
                    <div className="col-md-2"></div>
                    <div className="col">
                        <div class="card" >
                            <img class="card-img-top" src={Background} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">ARM processors</h5>
                                <p class="card-text">CPU chips continue to evolve into new architectures, while components and connectors shrink to unfathomably small sizes. </p>
                                <a href="https://techbeacon.com/enterprise-it/emerging-server-technologies-6-hot-trends-watch" class="btn btn-dark">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card" >
                            <img class="card-img-top" src={card1} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Xeon Phi </h5>
                                <p class="card-text">Servers can improve their overall processing power and speed is to add and use processors outside the CPU proper.</p>
                                <a href="https://techbeacon.com/enterprise-it/emerging-server-technologies-6-hot-trends-watch" class="btn btn-dark">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card" >
                            <img class="card-img-top" src={card3} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">3D XPoint</h5>
                                <p class="card-text">Memory evolution , where programs and even humongous databases can be kept in RAM indefinitely.</p>
                                <a href="https://techbeacon.com/enterprise-it/emerging-server-technologies-6-hot-trends-watch" class="btn btn-dark">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>


                <div className="spacer"></div>

            </div>
        </div>
    );
}

export default HomePage;
