import React, { useEffect, useState } from "react";
import dropdown from "../../assets/blackDropdown.svg";
import bdropdown from "../../assets/Bluedropdown.svg";
import profile from "../../assets/adprofile.png";
import home from "../../assets/home.svg";
import bed from "../../assets/bed.svg";
import bath from "../../assets/bath.svg";
// import sample from "../../assets/unit2.png";
import del from "../../assets/delete.svg";
import "../../styles/Dashboard.css";
import PositionedMenu from "../../components/Options/Options";
import CustomizedMenus from "../../components/Dropdown/Dropdown";
import UnitDetails from "../../components/BigModel/UnitDetails";
import { GetquotationdetailsAPI, GetunitAPI, GetUserDetailsApI } from "../../utils/API/API";
import axios from "axios";
const Dashboard = () => {
    const [OpenUnitDetails, setOpenUnitDetails] = useState(false); // State to control modal
    const [Units, setUnits] = useState([]);
    const [QuotationDetails, setQuotationDetails] = useState([]);
    const [userid , setuserid] = useState(2)
    const [Selectedid , setSelectedid] = useState(1)
    const [UserDetails, setUserDetails] = useState([]); // State to store user details
    // const Selectedid = 0;
    const handeUnitDetailsOpen = () => {
        setOpenUnitDetails(true);
        handleClose();
    };

    const fetchUserDetails = async () =>{
        try {
            const response = await axios.get(GetUserDetailsApI)
            if(response.status == 200) 
                setUserDetails(response.data)
                setSelectedid(response.data[userid].id)
        } catch (error) {
            console.log("error while fetching data" , error)
        }
    }

    const fetchUnitDetails = async () => {
        try {
            const response = await axios.get(GetunitAPI);
            if (response.status === 200) setUnits(response.data);
        } catch (error) {
            console.log("error while fetching data", error);
        }
    };

    const fetchQuotationDetails = async () => {
        try {
            const response = await axios.get(GetquotationdetailsAPI);
            if (response.status === 200) setQuotationDetails(response.data);
        } catch (error) {
            console.log("error while fetching data", error);
        }
    };

    const formatDate = (timestamp) => {
        const options = { day: "2-digit", month: "short", year: "2-digit" };
        return new Date(timestamp).toLocaleDateString("en-GB", options);
    };

    useEffect(() => {
        fetchUnitDetails();
        fetchQuotationDetails();
        fetchUserDetails();
    }, []);

    // console.log(UserDetails)
    // console.log(Units);
    // console.log(QuotationDetails);
    return (
        <div className="dashboard">
            <div className="topbar">
                <div className="start">
                    <li className="image">
                        <img src={dropdown} alt="imge n0t found" />
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
                                <img src={UserDetails[userid] ? UserDetails[userid].profile : "loading ..."} alt="profile" />
                            </div>
                            <div>
                                <div className="profinfo">
                                    <li className="name">{UserDetails[userid] ? UserDetails[userid].name : "loading ..."}</li>
                                    <li className="tagit">{UserDetails[userid] ? UserDetails[userid].roll : "loading ..."}</li>
                                </div>
                                <div className="profinfo">
                                    <li>
                                        <span>+</span>91 {UserDetails[userid] ? UserDetails[userid].mobile : "loading ..."}
                                    </li>
                                <li>{UserDetails[userid] ? UserDetails[userid].email : "loading ..."}</li>
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
                                    <li>
                                        {QuotationDetails[Selectedid]
                                            ? formatDate(
                                                  QuotationDetails[Selectedid]
                                                      .lease_start_date
                                              )
                                            : "Loading..."}
                                    </li>
                                </div>
                                <div>
                                    <li className="lighttext">
                                        lease end date
                                    </li>
                                    <li>
                                        {QuotationDetails[Selectedid]
                                            ? formatDate(
                                                  QuotationDetails[Selectedid]
                                                      .lease_end_date
                                              )
                                            : "Loading..."}
                                    </li>
                                </div>
                                <div>
                                    <li className="lighttext">
                                        rent start date
                                    </li>
                                    <li>
                                        {QuotationDetails[Selectedid]
                                            ? formatDate(
                                                  QuotationDetails[Selectedid]
                                                      .rent_start_date
                                              )
                                            : "Loading..."}
                                    </li>
                                </div>
                            </div>
                            <div className="secoption">
                                <li className="lighttext">grace period</li>
                                <li>
                                    {QuotationDetails[Selectedid]
                                        ? `${QuotationDetails[Selectedid].grace_period} days`
                                        : "Loading..."}
                                    <span>(beginning)</span>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="unitdetails">
                        <div className="heading">
                            <li>unit details</li>
                        </div>
                        <div className="unitcards">
                            {Units.map((unit, index) => (
                                <div className="unitcard" key={index}>
                                    <div
                                        className="image"
                                        onClick={handeUnitDetailsOpen}
                                    >
                                        <img src={unit.image_url} alt="" />
                                        <div className="delete">
                                            <img src={del} alt="" />
                                        </div>
                                    </div>
                                    <div
                                        className="infos"
                                        onClick={handeUnitDetailsOpen}
                                    >
                                        <div className="nameprice">
                                            <li className="name">
                                                {unit.name}
                                            </li>
                                            <li>${unit.price}</li>
                                        </div>
                                        <div className="lighttext">
                                            <li>{unit.address}</li>
                                            <li>{unit.area}sq.ft</li>
                                        </div>
                                        <div className="icons">
                                            <li className="icd">
                                                <li>
                                                    <img src={bed} alt="" />{" "}
                                                </li>
                                                <li>{unit.bed_rooms}</li>
                                            </li>
                                            <li className="icd">
                                                <li>
                                                    <img src={bath} alt="" />{" "}
                                                </li>
                                                <li>{unit.baths}</li>
                                            </li>
                                            <li className="icd">
                                                <li>
                                                    <img src={home} alt="" />
                                                </li>
                                                <li>{unit.bhk_counts}BHK</li>
                                            </li>
                                        </div>
                                    </div>
                                    <div className="customise">
                                        <li>
                                            <PositionedMenu />
                                        </li>
                                    </div>
                                </div>
                            ))}
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
            <UnitDetails
                opencondition={OpenUnitDetails}
                setopencondition={setOpenUnitDetails}
            />
        </div>
    );
};

export default Dashboard;
