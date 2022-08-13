import React from 'react';
import logo from './logo.svg';
import './App.css';
import {InvoiceList} from './components'

const data={
  customerName:"Invoice List",
  invoices:[
    {id:1,description:"Television",total:"1000.00"},
    {id:2,description:"HP Laptop",total:"2000.00"},
    {id:3,description:"Mobile",total:"3000.00"},
    {id:4,description:"Trimmer",total:"4000.00"},
    {id:5,description:"Pen Drive",total:"5000.00"}
  ]
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InvoiceList invoiceData={data}/>
      </header>
    </div>
  );
}

export default App;
