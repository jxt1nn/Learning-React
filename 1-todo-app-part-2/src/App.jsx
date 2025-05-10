import { useState } from "react";
import AppName from "./components/AppName";
import InputField from "./components/InputField";
import List from "./components/List";
import Empty from "./components/Empty";

function App() {

 const [items, setItems] = useState([]);
  
  return (
    <div>
      <AppName />
      <InputField items={items} setItems={setItems}/>
      {items.length < 1 && <Empty />}
      <List items={items} setItems={setItems} />
    </div>
  );
}

export default App;
