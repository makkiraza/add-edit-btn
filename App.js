// // import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react'

// function App() {
//   const [list, setlist]=useState([])
//   const[userinput, setuserinput]=useState('')
  
//   function additem(){
//     const templist= [...list]
//     templist.push(userinput)
//     setlist(templist)
//     setuserinput('')
//   }
//   function aded(index){
//     setuserinput(list[index])
//   }
  
//   function updatetinputstate(e){
//     setuserinput(e.target.value)
//   }
//   function deletitem(index){
//     const templist=[...list]
//     templist.splice(index,1)
//     setlist(templist)
    
//   }
  
//    return (
//     <div className="App">
//       <header className="App-header">

      


//         <input value={userinput} onChange={updatetinputstate}placeholder='inter any item'/>
//         <button onClick={additem}>add item</button>
//         <ul>
//            {list.map(function(item,index){
//             return<li>{item}
//           <button onClick={()=>deletitem(index)}>delet</button>
//           <button onClick={()=>aded(index) }>aded</button>
          
           
//             </li>
//           })}
//         </ul>
//     </header>
//      </div>
//   );
// }

// export default App;

import './App.css';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState('')
  const [list, setList] = useState(['aloo', 'tematar'])
  const [showButton, setshowButton] = useState(false)
  const [currentIndex, setCureentIndex] = useState('')

  function addItem() {
    const tempList = [...list]
    tempList.push(userInput)
    setList(tempList)
    setUserInput('')
  }

  function deleteItem(index) {
    const tempList = [...list]
    tempList.splice(index, 1)
    setList(tempList) 
  }

  function editItem(index) {
    setUserInput(list[index])
    setshowButton(true)
    setCureentIndex(index)
  }

  function updateItem() {
    const userIndex = currentIndex
    const tempList = [...list]
    tempList[userIndex] = userInput
    setList(tempList)
    setUserInput('')
    setCureentIndex('')
    setshowButton(false)

  }

  function romoveAllItems(){
    setList([])
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input type='text' onChange={(e) => { setUserInput(e.target.value) }} placeholder='Enter item' value={userInput} />
      {!showButton ?
        <button onClick={addItem}>Add item</button>
        :
        <button onClick={updateItem}>Update</button>}
      <button onClick={removeAllItems}>Remove All Item</button>
      <ul>
        {list.map(function (item, index) {
          return (<li style={currentIndex === index ? { backgroundColor: 'gray' } : {}} key={index}>{item}
            <button onClick={() => { deleteItem(index) }}>Delete</button>
            <button onClick={() => { editItem(index) }}>Edit</button>
          </li>)
        })}
      </ul>
    </div>
  );
}

export default App;



