import { Routes, Route } from 'react-router-dom';

//
import Home from './client/home';
import About from './client/about';
import AlertDialog from './client/AlertDialog';
import Button from './client/Button';
import Card from './client/Card';
import CheckBox from './client/CheckBox';
import Input from './client/Input';
import NavigationMenu from './client/NavigationMenu';
import Radio from './client/Radio';
import Select from './client/Select';
import Table from './client/Table';
import TextArea from './client/TextArea';
//TextArea
//
export default function App(){
    return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/alert_dialog" element={<AlertDialog />} />
        <Route path="/button" element={<Button />} />
        <Route path="/card" element={<Card />} />
        <Route path="/checkbox" element={<CheckBox />} />
        <Route path="/input" element={<Input />} />
        <Route path="/navigation_menu" element={<NavigationMenu />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/select" element={<Select />} />
        <Route path="/table" element={<Table />} />
        <Route path="/textarea" element={<TextArea />} />
        TextArea
      </Routes>
    </div>
    )
}
/*
*/