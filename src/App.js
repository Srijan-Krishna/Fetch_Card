import axios from 'axios';
import { useState , useEffect } from 'react';

const App =()=>{

  const [User,SetUser]=useState(null);
  const [Name,SetName]=useState("Loading...");
  const [Gender,SetGender]=useState("Loading...");
  const [Number,SetNumber]=useState("Loading...");
  

 useEffect(()=>{

axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
  .then(response => {
    SetUser(response.data.results[0]);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
},[]);

useEffect(() => {
  if (User) {
    SetName(`${User.name.title} ${User.name.first} ${User.name.last}`);
    SetGender(User.gender);
    SetNumber(User.phone);
  }
}, [User]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative bg-white shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl overflow-hidden w-80 p-6">
        
        <img
          src="https://img.freepik.com/premium-vector/famale-icon-vector-illustration_969863-195357.jpg?w=360"  
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-md"
        />
        
        
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold text-gray-800">{Name}</h2>
          <p className="text-gray-500">{Gender}</p>
          <p className="text-gray-600 mt-2">📞 {Number}</p>
        </div>

        
        <div className="mt-4 flex justify-center">
          <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition">
            View Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;