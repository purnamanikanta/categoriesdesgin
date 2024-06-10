import {useState} from 'react'
import './App.css';
import projectsList from './data';
import Title from './Title';
import Categorys from './Categorys';
import Card from './Card';


const simpleItem= [...new Set(projectsList.map((item)=>item.category))]
function App(){
  const[products,setProducts]=useState(projectsList)
  const[categorys,setCategorys]=useState(simpleItem)
  const[ram,setRam]=useState(null)
  const filterNameNew=(projectId)=>{
    const km=projectId===ram ? null : projectId;
    setRam(km)
  }
  const filterName=(projectId)=>{
    const okk=products.filter((sam)=>sam.projectId !== projectId)
    setProducts(okk)

  }
  const limiting=(category)=>{
    const idea=projectsList.filter((item)=>item.category===category)
    setProducts(idea);
  }
  
 
  return(
    <>
    
    <main className='hema'>
      <article>
      <Title name="STATIC RESPONSIVE DYNAMIC WEBSITES"/>
      <Categorys categorys={categorys}  limiting={limiting}/>
      <Card products={products}  filterName={filterName} ram={ram} filterNameNew={filterNameNew}  />
      </article>
    </main>
    </>
  )
}
export default App;