import './App.css';
// import ChangeTitle from './components/ChangeTitle';
// import AboutPage from './pages/aboutPage/AboutPage';
import ContactsPage from './pages/contactsPage/ContactsPage';
import MainPage from './pages/mainPage/MainPage';
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import CategoryFilter from "./components/CategoryFilter";
import {useState} from "react";

function App() {
    const [filter, setFilter] = useState('')

    return (
        <div className="app-container">
             {/*<MainPage />*/}
            {/* <h1>--------------</h1> */}
            {/* <AboutPage /> */}
            {/* <ChangeTitle /> */}
            {/*<ContactsPage />*/}
            <h1>To-do list</h1>
            <AddTask/>
            <CategoryFilter onChange={setFilter}/>
            <TaskList filter={filter}/>
        </div>
    );
}

export default App;