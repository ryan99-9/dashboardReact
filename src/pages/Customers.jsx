import React, { useState, useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import Axios from 'axios'

import { customersGrid } from "../data/dummy";
import { Header } from "../components";

// database
const url = "http://localhost:2000/customer-db"

const Customers = (props) => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = [
    { text: 'Add', id: 'Add' },
    { text: 'Edit', id: 'Edit' },
    { text: 'Delete', id: 'Delete' },
    { text: 'Click', id: 'Click' }
  ];

  const editing = { allowDeleting: true, allowEditing: true, allowAdding: true };

  const [customerdb, setCustomerdb] = useState([])

  useEffect(() => {
    Axios.get(`${url}`)
      .then(res => {
        setCustomerdb(res.data)
      })
  }, [])

  const clickHandler = (args) => {
    if (args.item.id === 'Click') {
      alert("Alert Click");
    }

    if (args.item.id === 'Edit') {
      alert("Alert Edit");
    }

    if (args.item.id === 'Delete') {
      alert("Alert Delete");
    }

    if (args.item.id === 'Add') {
      alert("Alert Add");
    }
  }

  const clickHandle = clickHandler.bind(props)

  return (
    <>
      {/* popup add data */}
      

      {/* data ist */}
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Customers" />
        <GridComponent
          dataSource={customerdb}
          enableHover={false}
          allowPaging
          pageSettings={{ pageCount: 5 }}
          selectionSettings={selectionsettings}
          toolbar={toolbarOptions}
          toolbarClick={clickHandle}
          editSettings={editing}
          allowSorting
        >
          <button >Delete</button>
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {customersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
        </GridComponent>
      </div>
    </>
  );
};

export default Customers;
