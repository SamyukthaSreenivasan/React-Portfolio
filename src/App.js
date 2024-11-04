import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import { Skills } from './components/skills';
import {Projects} from './components/Projects';
import { Contact } from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from './components/Footer';
import { MailchimpForm } from './components/MailChimpSubscribe';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Footer/>
      <Contact/>
      <MailchimpForm/>
    </div>
  );
}

export default App;
