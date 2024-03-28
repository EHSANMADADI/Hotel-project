export default function Tooltip(props:{ message:string, children: React.ReactNode }) {
     return (
     <div className="group relative">
           <span className="absolute -top-20 scale-0 transition-all rounded bg-gray-800 p-2 text-xl text-white group-hover:scale-100">{props.message}</span>
            {props.children}
        
     </div>
     )
 }
 