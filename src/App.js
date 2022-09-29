import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Courses from './Components/Courses/Courses';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Courses></Courses>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
