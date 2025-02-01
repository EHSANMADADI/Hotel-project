import EditMenuPage from '@/components/user/pages/resturant/Admin/Menu/EditMenuPage';

const _EditMenuPage = ({ params: { MenuItemId } }: { params: { MenuItemId: string } }) => {
  return <EditMenuPage menuItemId={MenuItemId} />;
};

// // اضافه کردن تابع generateStaticParams
// export async function generateStaticParams() {
//   // لیست آی‌دی‌های منو که باید به صورت استاتیک تولید شوند
//   const menuItemIds = ['1', '2', '3']; // مقادیر نمونه

//   // هر مقدار MenuItemId را به عنوان پارامتر بازمی‌گرداند
//   return menuItemIds.map((id) => ({
//     MenuItemId: id,
//   }));
// }

export default _EditMenuPage;
