import EditTablePage from '@/components/user/pages/resturant/Admin/Table/EditTablePage'
import React from 'react'

const _EditTablePage = ({ params: { tableId } }: { params: { tableId: string } }) => {
  return (
    <EditTablePage tableId={tableId} />
  )
}

export default _EditTablePage
