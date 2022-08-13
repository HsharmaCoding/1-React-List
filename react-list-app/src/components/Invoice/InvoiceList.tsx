import * as React from 'react';

interface IInvoiceListProps{
    invoiceData:{
        customerName:string;
        invoices:{id:number,description:string,total:string}[];
    }
}

export const InvoiceList=(props:IInvoiceListProps)=>{
    const {customerName,invoices}=props.invoiceData;

    return(
        <div>
            <h1>{customerName}</h1>
            <hr/>

            <table>
                <tr>
                    <th>Id</th>
                    <th>Description</th>
                    <th>Total</th>
                </tr>
                {
                    invoices.map((invoice)=>(
                        <tr key={invoice.id}>
                            <td>{invoice.id}</td>
                            <td>{invoice.description}</td>
                            <td>{invoice.total}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}