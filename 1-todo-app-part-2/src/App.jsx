import AppName from "./components/AppName";
import InputField from "./components/InputField";
import List from "./components/List";
function App() {

  let items = [
    {
      name: "Go to college",
      dueDate: "10/05/2025"
    },
    {
      name: "Go to college",
      dueDate: "10/05/2025"
    },
    {
      name: "Go to college",
      dueDate: "10/05/2025"
    }
  ];
  
  return (
    <div>
      <AppName />
      <InputField />
      <List items={items} />
    </div>
  );
}

export default App;
