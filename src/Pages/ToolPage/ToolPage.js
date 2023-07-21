import { Accordion } from "../../Components/Accordion/Accordion"
import { types, tools } from "../../products"
import { Card } from "../../Components/Card/Card"
import { ToolForm } from "../../Components/ToolForm/ToolForm"
import './ToolPage.scss'
import { useState } from "react"
export const ToolPage = () => {
  const [selectedType, setSelectedType] = useState();
  const [selectedTool, setSelectedTool] = useState();

  const handleSelectType = (type) => {
    setSelectedType(type)
  }

  const handleSelectTool = (tool) => {
    setSelectedTool(tool)
  }

  const typesElements = types.map(type => <Card type={type} isFav={false} handleSelect={handleSelectType} key={type.id} selectedCard={selectedType} />)

  const toolsFilter = tools.filter(tool => tool.type === selectedType)
  const toolsElements = toolsFilter.map(tool => <Card type={tool} isFav={true} handleSelect={handleSelectTool} key={tool.id} selectedCard={selectedTool}/>)
  
  const filterTypeSelected = types.find(type => type.id === selectedType);
  const filterToolSelected = tools.find(tool => tool.id === selectedTool);


  return (
    <section className="container__box tool-page">
      <div className="tool-page__tools">
        <Accordion 
          title='Machining application' 
          subtitle='Chose Machining application that you want to create' 
          content={typesElements}
        />
       {selectedType && (
         <Accordion 
          title={`${filterTypeSelected.title} Tool Type`} 
          subtitle='Chose Tool that you want to create' 
          content={toolsElements} 
        />
       )}
      </div>
      {selectedTool && (
        <ToolForm title={filterToolSelected.title}/>
      )}
    </section>
  )
}
