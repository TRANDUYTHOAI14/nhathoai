import React from "react";
export default function App() {
  const name = 'thoai';
  const old = 20;
  const isFemale = true;
  const student = {
    name: 'HTML',
  }
  const colorList = [
    'red','blue','green'
  ]

 return (
  <div className="app">
   <header>
    <ul>
      <li>{name}</li>
      <li>{old}</li>
    </ul>
   </header>
   <main>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ab qui, harum alias repudiandae libero impedit possimus. Dolores pariatur minus eius nihil accusamus sequi quis, est eveniet eos maiores illum.</p>
   </main>
   <footer>
    {
      colorList.map((item) =>
        <li>{item}</li>
      )
    }
    <p>Lorem, ipsum dolor.</p>
   </footer>
  </div>
 );
}

