import React from 'react';
import '../../App.css';
import ButtonSection from '../ButtonSection';

function Home() {
  return (
    <div>
      <br/>
      <h1 style = {{textAlign:'center'}}> Energy Future</h1>
      <br/><br/><br/>
      <h2>
      The world energy ecosystem and carbon footprint are intimately connected, as the energy sources we use and the way we consume them directly impact the amount of greenhouse gas emissions we produce. As we continue to seek out new and cleaner sources of energy, it is crucial that we reduce our carbon footprint to mitigate the impacts of climate change on our planet. Understanding the mathematics and the trends for emissions would assist society for the upcoming decades, to face the real challenge - to save the planet.
      </h2>
      <br/>
      <br/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ButtonSection style={{ flex: '1', margin: '50px' }} name = "China" link = "./China"/>
      <ButtonSection style={{ flex: '1', margin: '50px' }} name = "Russia" link = './Russia'/>
      <ButtonSection style={{ flex: '1', margin: '50px' }} name = "Saudi Arabia" link = './Saudi_Arabia'/>
      <ButtonSection style={{ flex: '1', margin: '50px' }} name = "India"  link = "./India"/>
      <ButtonSection style={{ flex: '1', margin: '50px' }} name = "USA" link = "./USA" />
      <ButtonSection style={{ flex: '1', margin: '50px' }} name = "Total Europe" link = "./TotalEurope"/></div>
      <br/><br/><br/><br/><br/>
      <details>
        <summary>Click here to read the references </summary>
      <h4>Person. “Saudi Arabia to Invest about $266bn for Clean Energy - Minister of Energy.” Reuters. Thomson Reuters, January 30, 2023. https://www.reuters.com/world/middle-east/saudi-arabia-invest-about-266-bln-clean-energy-minister-2023-01-30/. 
</h4> <br/>
<h4>“Low-Carbon Investments to Rise by $60 Billion in 2023 as Inflation Weakens; Hydrogen and CCUS Spending to Surge.” Rystad Energy, January 12, 2023. https://www.rystadenergy.com/news/low-carbon-investments-to-rise-by-60-billion-in-2023-as-inflation-weakens-hydroge. </h4><br/>
<h4>
Gates, Bill. “My Meeting with Prime Minister Modi.” gatesnotes.com, March 3, 2023. https://www.gatesnotes.com/My-meeting-with-Prime-Minister-Modi. 
</h4><br/>
<h4>“Global Carbon Capture, Utilization and Storage (CCUS) Technology Markets Report 2020-2022 & 2022-2040 with Profiles of 190+ Companies Including Products, Collaborations and Investment Funding - Researchandmarkets.com.” Business Wire, January 9, 2023. https://www.businesswire.com/news/home/20230109005457/en/Global-Carbon-Capture-Utilization-and-Storage-CCUS-Technology-Markets-Report-2020-2022-2022-2040-with-Profiles-of-190-Companies-Including-Products-Collaborations-and-Investment-Funding---ResearchAndMarkets.com#:~:text=This%20fast%20growing%20market%20is,private%20investment%20in%20CCUS%20companies. </h4>
    </details>
    </div>

    
  );
}

export default Home;