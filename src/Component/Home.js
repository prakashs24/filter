import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import User from "./User.json"
function Home(){
    // const [data,setData] = useState([])
    // const [records,setRecords] = useState(data)
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(res=> {
    //         setData(res.data)
    //         setRecords(res.data);
    //     })
    //     .catch(err => console.log(err));
    // },[])
    

    // const Filter = (event) =>{
    //         setRecords(data.filter(f => f.name.toLowerCase().includes(event.target.value) || f.email.toLowerCase().includes(event.target.value) || f.phone.includes(event.target.value))) 
            
    // }

    const [data,setData] = useState (User)
    const [sortList,setSortList] = useState([])
console.log(User)
  
      
//      const sortDate=(a,b)=>{
//         const dateA = new Date(a.date);
//         const dateB = new Date(b.date);
//         if(dateA < dateB) return 1;
//         else if(dateA > dateB) return -1;
//         return 0;            
   
      
// }
// data.sort(sortDate)

useEffect(()=>{
    const sortData=()=>{
        data.sort((a, b)=> new Date(b.date) - new Date(a.date))
        setSortList(data)
    }
    sortData()
    
 },[])

 const Filter = (event) =>{
    
  setSortList(data.filter (f =>  f.name.toLowerCase().includes(event.target.value)|| f.phone.toLowerCase().includes(event.target.value)|| f.email.toLowerCase().includes(event.target.value)))   
 
            }


    // if(sortList == ""){
    //     console.log("empty")
    // }
    // else{
    //     console.log("full")
    // }

console.log(sortList)

    return(
        <div className='p-5 bg-light'>
            <div className='bg-secondary shadow border p-5'>
                <input type='text' className='form-control ' placeholder='Search' onChange={Filter}  />
              {sortList.length > 0 ?  (<table className='m-auto fs-3 my-4 bg-white'>
                    <thead className=''>
                    <tr className='border border-dark border-3'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody >
                   {sortList.map((d, i) => (
                            <tr key={i} className='border border-secondary border-3'>
                                <td className='p-2'>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>{d.date}</td>
                            </tr>
                        )) }
                    </tbody>
                </table> ) : ( <h1 className='text-center'> Not Found ! </h1>)}
            </div>
        </div>
    )
}
export default Home