import React, { useEffect, useState } from "react";
import ibtn from "../../assets/i.svg";
import "../../styles/Tablelist.css";
import InnerTable from "../InnerTable/InnerTable";
import PrincingInnerTable from "../InnerTable/PricingInnerTable";
import { GetpricingAPI } from "../../utils/API/API";
import axios from "axios";


const Tablelist = ({ setopencondition }) => {
    const [isInnerTableOpen, setIsInnerTableOpen] = useState(false); 
    const [Pricetableopen, Setpricetableopen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(""); // Track the selected option
    const [List , setList] = useState([])

    const handleTableClick = (item) => {
        setSelectedOption(item);
        if (item === "Primary") {
            Setpricetableopen(true);
        } else {
            setIsInnerTableOpen(true);
        }
    };

    const fetchOptions = async () => {
        try {
            const response = await axios.get(GetpricingAPI);
            if (response.status === 200) 
                setList(response.data);
        } catch (error) {
            console.log("Error while fetching data", error);
        }
    };

    useEffect(()=>{
        fetchOptions()
    },[])

    // console.log(List)

    return (
        <div className="pricingtable">
            <div className="heading">Pricing Table</div>
            <div className="line"></div>
            <div className="page">
                {List.map((item, index) => (
                    <div 
                        className={`element${index + 1}`} 
                        key={index} 
                        onClick={() => handleTableClick(item.pricing_on)}
                    >
                        <div className="start">
                            <li className="number">{String(index + 1).padStart(2, '0')}</li>
                            <li>{item.pricing_on}</li>
                        </div>
                        <div className="end">
                            <li><img src={ibtn} alt="info" /></li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="5.538" height="10.5" viewBox="0 0 5.538 10.5">
                                    <path
                                        id="icons8-expand-arrow"
                                        d="M9.187,4.873,5,1.05.813,4.873a.509.509,0,0,1-.673,0,.408.408,0,0,1,0-.615L4.663.127a.509.509,0,0,1,.673,0l4.524,4.13a.408.408,0,0,1,0,.615A.509.509,0,0,1,9.187,4.873Z"
                                        transform="translate(5.288 0.25) rotate(90)"
                                        strokeWidth="0.5"
                                    />
                                </svg>
                            </li>
                        </div>
                    </div>
                ))}
                <InnerTable 
                    opencondition={isInnerTableOpen} 
                    setopencondition={setIsInnerTableOpen} 
                    selectedOption={selectedOption} // Pass selected option
                />
                <PrincingInnerTable  
                    opencondition={Pricetableopen} 
                    setopencondition={Setpricetableopen} 
                    selectedOption={selectedOption} // Pass selected option
                />
            </div>
        </div>
    );
};

export default Tablelist;
