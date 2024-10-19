import React from "react";
import dropdown from "../../assets/blackDropdown.svg";
import bdropdown from "../../assets/Bluedropdown.svg";
import profile from "../../assets/adprofile.png";
import bed from "../../assets/bed.svg";
import sqft from "../../assets/sqft.svg";
import bath from "../../assets/bath.svg";
import sample from "../../assets/unit2.png";
import del from "../../assets/delete.svg"
import "../../styles/Dashboard.css";
import PositionedMenu from "../../components/Options/Options";
import CustomizedMenus from "../../components/Dropdown/Dropdown";
const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="topbar">
                <div className="start">
                    <li className="image">
                        <img src={dropdown} alt="imge not found" />
                    </li>
                    <li className="text">create quotation to existing lead</li>
                </div>
                <div>
                    {/* <li className="text">casagrand</li>
                    <li>
                        <img src={dropdown} alt="" />
                    </li> */}
                    <CustomizedMenus />
                </div>
            </div>
            <div className="pagecontain">
                <div className="toppath">
                    <li>add contact</li>
                    <li>
                        <img src={bdropdown} alt="" />
                    </li>
                    <li>lead details</li>
                    <li>
                        <img src={bdropdown} alt="" />
                    </li>
                    <li>preview and create lead</li>
                    <li>
                        <img src={bdropdown} alt="" />
                    </li>
                    <li>quotation details</li>
                    <li className="number">
                        <span>4</span>
                    </li>
                    <li>preview and create</li>
                </div>
                <div className="pagecards">
                    <div className="leaddetails">
                        <div className="heading">
                            <span>lead details</span>
                        </div>
                        <div className="profileinfo">
                            <div className="image">
                                <img src={profile} alt="profile" />
                            </div>
                            <div>
                                <div className="profinfo">
                                    <li className="name">Tome cruise</li>
                                    <li className="tagit">prospect</li>
                                </div>
                                <div className="profinfo">
                                    <li>
                                        <span>+</span>91 9090808012
                                    </li>
                                    <li>tomcruise2515@mail.com</li>
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div>
                            <div className="heading">
                                <li>quotation details</li>
                            </div>
                            <div className="options">
                                <div>
                                    <li className="lighttext">
                                        lease start date
                                    </li>
                                    <li>30 jan 22</li>
                                </div>
                                <div>
                                    <li className="lighttext">
                                        lease end date
                                    </li>
                                    <li>30 jan 23</li>
                                </div>
                                <div>
                                    <li className="lighttext">
                                        rent start date
                                    </li>
                                    <li>30 jan 22</li>
                                </div>
                            </div>
                            <div className="secoption">
                                <li className="lighttext">garce period</li>
                                <li>
                                    90 days <span>(beginning)</span>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="unitdetails">
                        <div className="heading">
                            <li>unit details</li>
                        </div>
                        <div className="unitcards">
                            <div className="unitcard">
                                <div className="image">
                                    <img src={sample} alt="" />
                                    <div className="delete">
                                        <img src={del} alt="" />
                                    </div>
                                </div>
                                <div className="infos">
                                    <div className="nameprice">
                                        <li className="name">
                                            jumeirah estate
                                        </li>
                                        <li>$ 900.00</li>
                                    </div>
                                    <div className="lighttext">
                                        <li>jumeirah Golf estate</li>
                                        <li>2000 sq.ft</li>
                                    </div>
                                    <div className="icons">
                                        <li className="icd">
                                            <li>
                                                <img src={bed} alt="" />{" "}
                                            </li>
                                            <li>2</li>
                                        </li>
                                        <li className="icd">
                                            <li>
                                                <img src={bath} alt="" />{" "}
                                            </li>
                                            <li>2</li>
                                        </li>
                                        <li className="icd">
                                            <li>
                                                <img src={sqft} alt="" />
                                            </li>
                                            <li>2BHK</li>
                                        </li>
                                    </div>
                                </div>
                                <div className="customise">
                                    <li>
                                        <PositionedMenu />
                                    </li>
                                </div>
                            </div>
                            <div className="unitcard">
                                <div className="image">
                                    <img src={sample} alt="" />
                                    <div className="delete">
                                        <img src={del} alt="" /></div>{" "}
                                </div>
                                <div className="infos">
                                    <div className="nameprice">
                                        <li className="name">
                                            jumeirah estate
                                        </li>
                                        <li>$ 900.00</li>
                                    </div>
                                    <div className="lighttext">
                                        <li>jumeirah Golf estate</li>
                                        <li>2000 sq.ft</li>
                                    </div>
                                    <div className="icons">
                                        <li className="icd">
                                            <li>
                                                <img src={bed} alt="" />{" "}
                                            </li>
                                            <li>2</li>
                                        </li>
                                        <li className="icd">
                                            <li>
                                                <img src={bath} alt="" />{" "}
                                            </li>
                                            <li>2</li>
                                        </li>
                                        <li className="icd">
                                            <li>
                                                <img src={sqft} alt="" />
                                            </li>
                                            <li>2BHK</li>
                                        </li>
                                    </div>
                                </div>
                                <div className="customise">
                                    <li>
                                        <PositionedMenu />
                                    </li>
                                </div>
                            </div>
                            <div className="unitcard">
                                <div className="image">
                                    <img src={sample} alt="" />
                                    <div className="delete">
                                        <img src={del} alt="" /></div>{" "}
                                </div>
                                <div className="infos">
                                    <div className="nameprice">
                                        <li className="name">
                                            jumeirah estate
                                        </li>
                                        <li>$ 900.00</li>
                                    </div>
                                    <div className="lighttext">
                                        <li>jumeirah Golf estate</li>
                                        <li>2000 sq.ft</li>
                                    </div>
                                    <div className="icons">
                                        <li className="icd">
                                            <li>
                                                <img src={bed} alt="" />{" "}
                                            </li>
                                            <li>2</li>
                                        </li>
                                        <li className="icd">
                                            <li>
                                                <img src={bath} alt="" />{" "}
                                            </li>
                                            <li>2</li>
                                        </li>
                                        <li className="icd">
                                            <li>
                                                <img src={sqft} alt="" />
                                            </li>
                                            <li>2BHK</li>
                                        </li>
                                    </div>
                                </div>
                                <div className="customise">
                                    <li>
                                        <PositionedMenu />
                                    </li>
                                </div>
                            </div>
                            <div className="unitcard">
                                <div className="image">
                                    <img src={sample} alt="" />
                                    <div className="delete">
                                        <img src={del} alt="" /></div>{" "}
                                </div>
                                <div className="infos">
                                    <div className="nameprice">
                                        <li className="name">
                                            jumeirah estate
                                        </li>
                                        <li>$ 900.00</li>
                                    </div>
                                    <div className="lighttext">
                                        <li>jumeirah Golf estate</li>
                                        <li>2000 sq.ft</li>
                                    </div>
                                    <div className="icons">
                                        <li className="icd">
                                            <li>
                                                <img src={bed} alt="" />{" "}
                                            </li>
                                            <li>2</li>
                                        </li>
                                        <li className="icd">
                                            <li>
                                                <img src={bath} alt="" />{" "}
                                            </li>
                                            <li>2</li>
                                        </li>
                                        <li className="icd">
                                            <li>
                                                <img src={sqft} alt="" />
                                            </li>
                                            <li>2BHK</li>
                                        </li>
                                    </div>
                                </div>
                                <div className="customise">
                                    <li>
                                        <PositionedMenu />
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="summary">
                        <div className="heading">quotation summary</div>
                        <div className="content">
                            <div className="top">
                                <div className="light">
                                    <li className="start">Descrition</li>
                                    <li className="center">qty</li>
                                    <li
                                        className="end"
                                        style={{ color: "#5e5e5f" }}
                                    >
                                        amount
                                    </li>
                                </div>
                                <div className="line"></div>
                                <div className="list">
                                    <li className="start">total amount</li>
                                    <li className="center">3</li>
                                    <li className="end">$3,600.00</li>
                                </div>
                                <div className="list">
                                    <li className="start">total discount</li>
                                    <li className="center">10%</li>
                                    <li className="end">
                                        <span className="discount">
                                            - $ 100.00
                                        </span>
                                    </li>
                                </div>
                                <div className="line"></div>
                                <div className="list">
                                    <li className="start">Total refundable</li>
                                    <li className="center">0%</li>
                                    <li className="end">$ 0</li>
                                </div>
                                <div className="line"></div>
                                <div className="list">
                                    <li className="start">Total tax</li>
                                    <li className="center">18%</li>
                                    <li className="end">$ 648.00</li>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="line"></div>
                                <div className="list">
                                    <li className="start">quote amount</li>
                                    <li className="end">$ 4,148.00</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <div className="one">previous</div>
                    <div className="two">
                        <div className="cancel">cancel</div>
                        <div className="create">create quotation</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
