import React from 'react'
import useTables from '../hooks/useTables';
import Title from '../Title';
import TablesGrid from './TablesGrid';
import Spinner from '../Spinner';

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
        isPending ? <Spinner /> :
          <TablesGrid tables={tables} />
      }
    </div>
  )
}

export default EditTables