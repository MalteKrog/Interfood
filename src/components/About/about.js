import React,{Fragment,useState} from 'react'

const About = () => {
  const [ toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <Fragment>

    <section className="about">

    <div className="row">

    <div className="column">
      <div className="about-img"></div>
    </div>

    <div className="column">

    <div className="tabs">

    <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(1)}
    >
      <h2>Interfood</h2>
    </div>

    <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(2)}
    >
      <h2>Produkter</h2>
    </div>

    <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(3)}
    >
      <h2>Historie</h2>
    </div>
      
    </div>

    <div className="tab-content">

    {/* About Content */}

    <div className={toggleTab === 1 ?"content active-content":"content"}>
      <h2>Hvem er vi?</h2>
      <p>International Food Supply er din pålidelige madgrossist som importerer og leverer Asiatiske fødevarer. Vi har mere end 15 års erfaring med forsyning og levering af asiatiske fødevarer i Danmark, hvilket har gjort os til en af de førende leverandører af Asiatiske fødevarer i Jylland og på Fyn. </p>
       <h3>Vi sørger for høj kvalitet med endnu højere service!</h3>
       <p>Udover autentiske råvarer, levere vi også landets bedste service. Vi lægger stor dyd i at vores kunder altid kan føle sig sikre i deres kommunikation og samarbejde med os. Det er vigtigt for os at alle kan få hjælp under hele forløbet, og dermed skabe en god kundeoplevelse. </p>
    </div>

    {/* About Content */}

    <div className={toggleTab === 2 ?"content active-content":"content"}>
      <h2>Noget for alle</h2>
      <p>Om det er et gadekøkken i Vietnam, eller Micheline restaurant i København, har Interfood det der skal bruges til dig. Vi har omhyggeligt håndplukket, og kvalitetstestet vores produkter, for at med god samvittighed kan opretholde den bedste standard. Vores produktkatalog repræsenterer kendte varemærker, hvor disse produkter findes i supermarkeder, købmandsforretninger og restauranter over hele verdenen. Hertil udvider vi løbende vores produktkatalog, så kvaliteten af produkterne kontinuerligt forbedres. </p>

       

    </div>

       {/* Timeline Content? */}

    <div className={toggleTab === 3 ?"content active-content":"content"}>

    <div className="exp-column">
      <h3>Interfoods begyndelse</h3>
      <span>2017-2018</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error rem dicta perferendis et qui obcaecati labore accusantium cupiditate libero.</p>
    </div>

    <div className="exp-column">
      <h3>Tid til nye lokaler</h3>
      <span>2019-2020</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error rem dicta perferendis et qui obcaecati labore accusantium cupiditate libero.</p>
    </div>

    <div className="exp-column">
      <h3>Interfood i 5. gear</h3>
      <span>2022</span>
      <p>Rigtig mange nye kunde, bla bla blaLorem ipsum dolor sit amet consectetur adipisicing elit. Enim error rem dicta perferendis et qui obcaecati labore accusantium cupiditate libero.</p>
    </div>
    
    </div>
        
    </div>

    </div>

    </div>

    </section>
    
    <div style={{ borderTop: "4px solid #ADADAD ", marginLeft: 200, marginRight: 200 }}></div>

    </Fragment>
  )
}

export default About