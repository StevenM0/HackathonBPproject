import csv from 'csv-parser';
import fs from 'fs';

const dataArray = [];

fs.createReadStream('bp-stats-review-2022-all-data.csv')
  .pipe(csv())
  .on('data', (row) => {
    dataArray.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

  export function BP() {
    return (
      <div>
        <h1>My Excel Data</h1>
        <ul>
          {dataArray.map((item, index) => (
            <li key={index}>{item.name} - {item.value}</li>
          ))}
        </ul>
      </div>
    );
  }