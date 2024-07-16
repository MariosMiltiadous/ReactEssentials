import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'

const reactDesv = ['Fundamental', 'Core', 'Crucial']

function getRandomInt(max){
    return Math.floor(Math.random() * (max+1))
   }
   
export function Header() {

    const discription = reactDesv[getRandomInt(2)];
  
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" className="rotating-image"/>
        <h1>React Essentials</h1>
        <p>
          {discription} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }
  