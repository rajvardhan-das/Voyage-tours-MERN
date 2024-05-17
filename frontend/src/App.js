import "./App.css";
import Layout from "./components/Layout/Layout";
import axios from 'axios'

function App() {
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('voyage-tours-mern-api.vercel.app')
    .then(result=>console.log(result))
    .catch(err =>console.log(err))
  }
  return <Layout />;
}

export default App;
