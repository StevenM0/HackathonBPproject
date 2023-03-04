
import React from 'react';
import '../../App.css';
import TotalEurope_graph from '../graphs/total_europe_graph';

function TotalEuropepage() {
  return (
    <div>
        <h1 style= {{textAlign: 'center'}}>Total Europe</h1>
        <TotalEurope_graph/>
        <h3>
        European countries, with Germany, France, Italy and England being the largest contributors to CO2 footprint through the years, demonstrate a common trait of being a developed country in the modern world. Although Europe became an “importer” of energy in the last few decades, due to their lack of natural primary energy resources, they still are the contributors of the whole carbon footprint in the modern world. According to bp’s Statistical Review,         </h3>
        <br/>
        <br/>
        <h3>➼  In 1965, Europe emitted 3427.8 million metric tons of carbon dioxide from energy consumption and production. 
 </h3>
        <h3>➼  By 1990, Europe’s emissions had reached its peak value of 5462.9 million metric tons.
 </h3>
        <h3>➼  In 2019, before the pandemic, Europe emitted 4073.7 million metric tons of carbon dioxide.
</h3>
<h3>➼  In 2020, Europe’s emissions fell to 3608.3 million metric tonnes, due to COVID-19 pandemic, as well as subsequent economic slowdown. 
 
 </h3>
        <br/>
        <br/>
        <h3> 
        To observe the general trend, it is noticeable that European emissions are tending to fall at a very slow rate in the near term, considering the emission numbers from the last 20 years. Also, since Europe is becoming one of the largest energy importers, it means that the country will seek to invest in renewable energy and carbon utilization, to lessen their dependence on other world superpowers, like Russia and the United States. 
 
 </h3>
    </div>
  );
}

export default TotalEuropepage;