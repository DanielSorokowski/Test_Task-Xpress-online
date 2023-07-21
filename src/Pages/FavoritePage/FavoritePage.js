import { useContext, useState } from "react";
import { Accordion } from "../../Components/Accordion/Accordion";
import { ToolForm } from "../../Components/ToolForm/ToolForm";
import { Card } from "../../Components/Card/Card";
import { Context } from '../../App';

export const FavoritePage = () => {
  const { fav } = useContext(Context);

  const [selectedTool, setSelectedTool] = useState();

  const handleSelectTool = (tool) => {
    setSelectedTool(tool)
  }

  const toolsElements = fav.map(tool => <Card type={tool} isFav={true} handleSelect={handleSelectTool} key={tool.id} selectedCard={selectedTool}/>)
  
  const filterToolSelected = fav.find(tool => tool.id === selectedTool);


  return (
    <section className="container__box tool-page">
      {fav.length ? (
        <>
          <div className="tool-page__tools">
            <Accordion 
              title='Favorites'
              subtitle='Chose Tool that you want to create' 
              content={toolsElements} 
            />
          </div>
          {selectedTool && (
            <ToolForm title={filterToolSelected.title}/>
          )}
        </>
      ) : <h2>You dont have any favorites tools</h2>} 
    </section>
  )
}
