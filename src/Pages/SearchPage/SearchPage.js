import { useContext, useState } from "react";
import { Accordion } from "../../Components/Accordion/Accordion";
import { ToolForm } from "../../Components/ToolForm/ToolForm";
import { Card } from "../../Components/Card/Card";
import { useParams } from "react-router-dom";
import { tools } from '../../products';

export const SearchPage = () => {
  const { value } = useParams();
  const [selectedTool, setSelectedTool] = useState();

  const handleSelectTool = (tool) => {
    setSelectedTool(tool)
  }

  const searchedTools = tools.filter(tool => tool.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()))

  const toolsElements = searchedTools.map(tool => <Card type={tool} isFav={true} handleSelect={handleSelectTool} key={tool.id} selectedCard={selectedTool}/>)
  
  const filterToolSelected = searchedTools.find(tool => tool.id === selectedTool);


  return (
    <section className="container__box tool-page">
      {searchedTools.length ? (
        <>
          <div className="tool-page__tools">
            <Accordion 
              title='Search'
              subtitle='Chose Tool that you want to create' 
              content={toolsElements} 
            />
          </div>
          {selectedTool && (
            <ToolForm title={filterToolSelected.title}/>
          )}
        </>
      ) : <h2>There is no tool that you search for</h2>} 
    </section>
  )
}
