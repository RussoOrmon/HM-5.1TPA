import "./App.css";
import Comment from "./components/Comment/Comment";

const comment = [
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Pyshyk",
      avatarUrl: "http://placekitten.com/g/62/62",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Myshyk",
      avatarUrl:
        "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Myyi",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
];
console.log(comment);


function App() {
  return (
    <div className="App">
     {comment.map((item)=>( <Comment key={item}
     date={item.date}  text={item.text} 
     author={item.author} name={item.author.name} avatarUrl={item.author.avatarUrl}/>))}
    </div>
  );
}
export default App;
