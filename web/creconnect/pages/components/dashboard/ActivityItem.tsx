type Props = {
     name: string;
     action: string;
     time:string;
     amount?: string;
}


export default function ActivityItem({name, action, time, amount}: Props){
     return (
          <div className="flex justify-between items-center text-sm">
               <div className="">
                    <p className="font-medium">{name}</p>
                    <p className="text-gray-500">{action}</p>
               </div>
               <div className="text-right">
                    {amount && <p className="font-semibold">{amount}</p>}
                    <p className="text-gray-400">{time}</p>
               </div>
          </div>
     );
}