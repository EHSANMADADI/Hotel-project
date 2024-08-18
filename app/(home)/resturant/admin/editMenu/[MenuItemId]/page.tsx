import EditMenuPage from '@/components/user/pages/resturant/Admin/Menu/EditMenuPage'

const _EditMenuPage = ({params:{MenuItemId}}:{params:{MenuItemId:string}}) => {
  return <EditMenuPage menuItemId={MenuItemId} />
    
}

export default _EditMenuPage
