import "./global.css";
import { Header } from "./components/Header/Header.js";
import { Form } from "./components/Form/Form.js";
import { Footer } from "./components/Footer/Footer.js";
import { Tapbar } from "./components/Tabbar/Tabbar.js";
import { useState } from "react";
// import { FormEntries } from "./components/FormEntries/FormEntries.js";

function App() {
  const [entries, setEntries] = useState("");

  function handleAddEntry(event) {
    return;
  }
  return (
    <>
      <Header headline="JOURNAL" />
      <main>
        <h2 className="formTitle">NEW ENTRY</h2>
        <Form
          labelNameInput="Motto"
          labelNameTextarea="Notes"
          idInput="motto"
          idTextarea="notes"
          buttonText="Create"
          onAddEntry={handleAddEntry}
        >
          {/* <FormEntries /> */}
        </Form>
        <div className="tapbar">
          <Tapbar>All Entries</Tapbar>
          <Tapbar>Favorites</Tapbar>
        </div>
      </main>
      <Footer text="Journal-App -- 2022" />
    </>
  );
}

export default App;
