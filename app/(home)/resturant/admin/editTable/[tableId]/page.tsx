import EditTablePage from '@/components/user/pages/resturant/Admin/Table/EditTablePage';
import React from 'react';

const _EditTablePage = ({ params: { tableId } }: { params: { tableId: string } }) => {
  return <EditTablePage tableId={tableId} />;
};

// اضافه کردن تابع generateStaticParams
// export async function generateStaticParams() {
//   // لیست آی‌دی‌های جدول که باید به صورت استاتیک تولید شوند
//   const tableIds = ['1', '2', '3']; // مقادیر نمونه

//   // هر مقدار tableId را به عنوان پارامتر بازمی‌گرداند
//   return tableIds.map((id) => ({
//     tableId: id,
//   }));
// }

export default _EditTablePage;
