import React from 'react'
import useTables from '../hooks/useTables';
import Title from '../Title';
import TablesGrid from './TablesGrid';

const EditTables = () => {
  const { data: tables, isError, isPending } = useTables()

  if (isError)
    return <div><Title>حذف و ویرایش میزها</Title>
      <h2 className='text-center font-bold text-xl py-8 animate-pulse'>دریافت اطلاعات با خطا مواجه شد. </h2>
    </div>

  return (
    <div>
      <Title>حذف و ویرایش میزها</Title>
      {
        isPending ? <p className='text-xl font-bold'>در حال دریافت اطلاعات ...</p> :
          <TablesGrid tables={tables} />
      }
    </div>
  )
}

export default EditTables