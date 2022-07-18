import './App.css';
import Search from './component/search/search';

function App() {

  const handleOnSearchChange = (searchData)=>{
       console.log(searchData);
  }
  return (
    <div className="container">
    <Search onSerachChnage={handleOnSearchChange}/>
    </div>
  );
}

export default App;
