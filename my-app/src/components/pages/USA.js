
import React from 'react';
import '../../App.css';
import USA_graph from '../graphs/usa_graph';
function USApage() {
  return (
    <div>
        <h1 style= {{textAlign: 'center'}}>USA</h1>
        <USA_graph/>
        <h3>
        The United States has been one of the most influential countries in primary energy production and consumption, and consecutively, carbon dioxide emissions. According to the “bp” Statistical Review:
        </h3>
        <br/>
        <br/>
        <h3>➼  The US reportedly emitted 3451,9 million metric tonnes of CO2 from energy consumption in 1965. </h3>
        <h3>➼  By 2007, the US emitted 5884,2 million metric tons of carbon dioxide, reaching their historical peak. 
 </h3>
        <h3>➼  In 2020, the US emissions fell to 4420,6 million metric tons due to COVID-19 pandemic and related economic downturn, which is the trough of emission data since 1983.
 </h3>
        <h3>➼  In general, the US emissions from energy consumption have increased at an average annual rate of 1.1%.
</h3>
        <br/>
        <br/>
        <h3> 
        This rise in the carbon emissions of the United States is because of heavy historical reliance on coal, oil and natural gas. However, with increasing popularity of electric cars, and most importantly, with the heavy investment on CCUS technology (Carbon Capture, Utilization and Storage), the US seeks to achieve net zero emissions in the next 30-40 years from now. 
 </h3>
        <br/>
        <br/>
        <h3> 
        The United States is the country among the other emitters which has the best technology and material to contribute to a change in the industry, and is expected to do so in the next 50-60 years, with their heavy investments in CCUS, geothermal energy and other types of renewable energy. 
 
 </h3>
        <br/>
        <br/>
    </div>
  );
}

export default USApage;