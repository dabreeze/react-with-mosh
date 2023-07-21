import React from "react";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["bottle water", "malt", "beer", "bags"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} headings="Cities" onSelectedItem={handleSelectedItem} />
    </div>
  );
}

export default App;
