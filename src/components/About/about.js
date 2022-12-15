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
      <h2>About</h2>
    </div>

    <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(2)}
    >
      <h2>Værdier</h2>
    </div>

    <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(3)}
    >
      <h2>Experience</h2>
    </div>
      
    </div>

    <div className="tab-content">

    {/* About Content */}

    <div className={toggleTab === 1 ?"content active-content":"content"}>
      <h2>Hvem er vi?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Eveniet nostrum laborum porro pariatur minima tenetur.
       Adipisci obcaecati placeat ex veritatis est delectus sunt, 
       quam doloribus nemo sed perferendis ipsa corporis?</p>
       <h3>Vi sørger for høj kvalitet med endnu højere service!</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quae accusantium totam mollitia facilis debitis porro sunt repellat eveniet dignissimos.</p>
    </div>

    {/* About Content */}

    <div className={toggleTab === 2 ?"content active-content":"content"}>
      <h2>Værdier</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Eveniet nostrum laborum porro pariatur minima tenetur.
       Adipisci obcaecati placeat ex veritatis est delectus sunt, 
       quam doloribus nemo sed perferendis ipsa corporis?</p>

       

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
    
    </Fragment>
  )
}

export default About