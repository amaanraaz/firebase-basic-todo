import './App.css'
import { getDatabase,ref,set } from "firebase/database"
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth"
import { app } from './firebase'

const db = getDatabase(app);
const auth = getAuth(app);

function App() {

  // interacting with real time database
  // const putData = ()=>{
  //   set(ref(db,'/users/user1'),{
  //     username: "raj",
  //     email: "1emai@email.com",
  //     phone: "+345543323"
  //   })
  // }

  // interacting with auth service signup
  // const signup = ()=>{
  //   createUserWithEmailAndPassword(auth,"aman@gmail.com","helloooo").then((value)=>console.log(value))
  // }

  // SignIn
  // const signIn = ()=>{
  //   signInWithEmailAndPassword(auth,"aman@gmail.com","heloooo").then((value)=>console.log("success")).catch((error)=>console.log("error"))
  // }



  return (
    <>
      <h1>hello</h1>
      <button onClick={signIn}>Put</button>
    </>
  )
}

export default App
