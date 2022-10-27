import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ref, child, get } from "firebase/database";
import { database } from "./database";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [data, SetData] = useState([])
  const [user, setUser] = useState({})

  console.log(user);

  function getData(i) {
    const dbRef = ref(database);
      get(child(dbRef, `tweets`)).then((snapshot) => {
        if (snapshot.exists()) {
          SetData(snapshot.val())     
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
}

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login setUser={setUser}/>}/>
        <Route path="/home" element={user.aud?.length > 0 ? <Home user={user} getData={getData} data={data}/>:<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
