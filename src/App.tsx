import { useState } from 'react'
import './App.css'
import quotes from "./assets/quotes.json"
import { FaTwitter,FaQuoteLeft,FaQuoteRight,FaTumblr} from "react-icons/fa";
interface Quote{
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote=> {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
const getRandomColor=(): string=>{
  const red= Math.floor(Math.random()*128);
  const green= Math.floor(Math.random()*128);
  const blue= Math.floor(Math.random()*128);
  return `rgb(${red},${green},${blue})`;
}
const transition= "all 1.5s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
   const changeQuote=()=>{
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
   }
   const [randomColor, setRandomColor]= useState<string>(getRandomColor());
  return (
    <div className='background' style={{backgroundColor: randomColor, transition}}>
     
       
      <div id="quote-box">
        <div className="quote-content" style={{color: randomColor,transition}}>
        
          <h2 id="text">
          <FaQuoteLeft size="30" style={{marginRight: "10px"}}/>
            {quote.quote}
            <FaQuoteRight size="30" style={{marginRight: "10px"}}/>
          </h2>
          
          <h4 id="author">-{quote.author}</h4>
        </div>
        <div className="buttons">
          <a title="Tweet this quote!" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}"} id="tweet-quote"
        style={{
          backgroundColor: randomColor,
          marginRight: "10px",
          transition
        
        }}
        >
          <FaTwitter color="white" />
        </a>
        <a  id="tumblr-quote" title="Post this quote on tumblr!"  href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=John%20Lennon&amp;content=Life%20is%20what%20happens%20to%20you%20while%20you%E2%80%99re%20busy%20making%20other%20plans.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
        style={{
          backgroundColor: randomColor,
          marginRight: "10px",
          transition
        
        }} >
            <FaTumblr color="white"/>
          </a>
        <button id="new-quote" onClick={changeQuote} style={{backgroundColor: randomColor,transition}}>
          New Quote
        </button>
        </div>
       
      </div>
     
    </div>
  );
}

export default App
