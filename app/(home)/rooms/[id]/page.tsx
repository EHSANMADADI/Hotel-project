'use client'
import RoomsS from '@/components/user/pages/home/popular-rooms/rooms/index'
const Rooms = ({ params }: any) => {
     const Id = params.id;
     switch (Id) {
          case '0': return (<RoomsS/>)
          case '1': return (<RoomsS/>)
          case '2': return (<RoomsS/>)
          case '3': return (<RoomsS/>)
          case '4': return (<RoomsS/>)

          default: return (<h1>خیچ چیز وجود ندارد</h1>)
     }
}
export default Rooms;