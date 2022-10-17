import React, { useEffect, useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";
import axios from "axios";
import { ordersssData } from "../data/datassql";


const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  let [dataReal, setDataReal] = useState(null)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/orangtua')
      // .then(response => response.json())
      .then(res => {
        setDataReal(res.data);
        console.log(dataReal);
      })
  });
  // showTableHead = () => {
  //   return (
  //     <thead>
  //       <tr>
  //         <th>id</th>
  //         <th>Nama Ortu</th>
  //         <th>Alamat</th>
  //         <th>Bulan Masuk</th>
  //         <th>Kota</th>
  //         <th>Provinsi</th>
  //         <th>Email</th>
  //         <th>Catatan Orang Tua</th>
  //         <th>Regional</th>
  //       </tr>
  //     </thead>
  //   )
  // }
  // showTableBody = () => {
  //   return (
  //     <tbody>
  //       {this.props.cart.map((item, index) => {
  //         if (index === this.state.indexEdit) {
  //           return (
  //             <tr key={index}>
  //               <td>{index + 1}</td>
  //               <td>
  //                 <Image rounded className='image' src={item.image} />
  //               </td>
  //               <td>{item.name}</td>
  //               <td>Rp. {item.price.toLocaleString()}/ pcs</td>
  //               <td width='15%'>
  //                 <div style={{ display: 'flex', justifyContent: "space-around", width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
  //                   <Button onClick={this.onMinus} style={{ flexBasis: '20%' }} disabled={this.state.qty <= 1 ? true : false} variant='outline-danger'>-</Button>
  //                   <Form.Control
  //                     style={{ marginRight: '10px', marginLeft: '10px', flexBasis: '30%' }}
  //                     value={this.state.qty}
  //                     onClick={this.onInputClick}
  //                     onKeyDown={(e) => this.onBackspace(e)}
  //                     onChange={(e) => this.onInput(e, item.stock)}
  //                   />
  //                   <Button onClick={this.onPlus} variant='outline-success' disabled={this.state.qty >= item.stock ? true : false} style={{ flexBasis: '20%' }}  >+</Button>
  //                 </div>
  //               </td>
  //               <td>Rp. {(item.qty * item.price).toLocaleString()}</td>
  //               <td width='15%'>
  //                 <Button variant='danger' className='me-3' onClick={() => this.setState({ indexEdit: null })}>Batal</Button>
  //                 <Button variant='success' disabled={this.state.qty === ''} onClick={() => this.onSave(index)}>Simpan</Button>
  //               </td>
  //             </tr>
  //           )
  //         }
  //         return (
  //           <tr key={index}>
  //             <td>{index + 1}</td>
  //             <td>
  //               <Image rounded className='image' src={item.image} />
  //             </td>
  //             <td>{item.name}</td>
  //             <td>Rp. {item.price.toLocaleString()}/ pcs</td>
  //             <td width='15%'>{item.qty}</td>
  //             <td>Rp. {(item.qty * item.price).toLocaleString()}</td>
  //             <td width='15%'>
  //               <Button variant='danger' className='me-3' onClick={() => this.onDelete(index)}>Hapus</Button>
  //               <Button variant='secondary' onClick={() => this.onEdit(index)}>Edit</Button>
  //             </td>
  //           </tr>
  //         )
  //       })}
  //     </tbody>
  //   )
  // }


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      {/* <Table responsive='sm' className='table' bordered hover variant='dark' striped>
        {this.showTableHead()}
        {this.showTableBody()}
      </Table> */}
      {dataReal ? dataReal.map(item => {
        return (
          <>
            <h2>{item.nama_ortu}</h2>
            <h1>{item.id}</h1>
          </>
        )
      })
        : ""
      }

    </div>
  );
};
export default Orders;
