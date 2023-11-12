import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Chart } from 'react-google-charts';


const Statistics = () => {

    // const [donationsData, setDonationsData] = useState([]);

    const donationTotalData = useLoaderData();
    const totalDonationLength = donationTotalData.length;
    console.log(totalDonationLength);

    const donationItems = JSON.parse(localStorage.getItem('donations'));
    var donationLength = donationItems.length;
    console.log(donationLength);

    let result = (donationLength/totalDonationLength)*100;
    console.log(result);

    const data = [
        ['Task', 'Hours per Day'],
        ['Total Donation', totalDonationLength],
        ['Your Donation', donationLength]
        
    ];

    return (
        <div className="w-[400px] md:w-[600px] mx-auto">        
            <Chart
                width={'700px'}
                height={'600px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={data}
            />
        </div>
    );
};

export default Statistics;