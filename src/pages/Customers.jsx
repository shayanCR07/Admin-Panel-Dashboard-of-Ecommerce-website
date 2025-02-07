import React from 'react'
import { GridComponent, ColumnsDirective, Selection, ColumnDirective, Edit, Page, Filter, Toolbar, Sort, Inject } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <Header category = "Page" title = "Customers" />

        <GridComponent
         dataSource={customersData} allowPaging allowSorting toolbar={["Delete"] } width = "auto" editSettings={{ allowEditing: true, allowDeleting:true }}>
          <ColumnsDirective>
           {customersGrid.map(( item, index ) => (
            <ColumnDirective  key={index} {...item}/>
           ))}
          </ColumnsDirective>
          <Inject services={[Edit,Selection,Sort, Filter, Page, Toolbar]}/>
        </GridComponent>
    </div>
  )
}

export default Customers
