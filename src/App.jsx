import { CORE_CONCEPTS } from "./data";
import { Header } from "./components/Header/Header";
import { CoreConcept } from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data-with-examples";

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedBtn){
    setSelectedTopic(selectedBtn);
}

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=>{
              return <CoreConcept key={conceptItem.title}  {...conceptItem}/>
            })}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Add children approach */}
            <TabButton onSelect={()=>handleSelect('components')} isSelected={selectedTopic === 'components'}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
          </menu>
          {!selectedTopic ? <p>Please select a topic </p> : 
          <div id="tab-content">       
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
            {EXAMPLES[selectedTopic].code} 
            </code>
          </pre>
        </div>}
        
        </section>
      </main>
    </div>
  );
}

export default App;
