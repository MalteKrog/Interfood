import React ,{Fragment} from 'react'
import "../About/about.css"

const About = () => {
    return (
        <Fragment>
        
        <section className='about'>
            <div className='row'>

                <div className='column'>
                    <div className='about-img'>
                </div>

                </div>

                <div className='column'>

                <div className='tabs'>
                    <div className='singe-tab'>
                        <h2>About</h2>
                    </div>

                    <div className='singe-tab'>
                        <h2>About</h2>
                    </div>

                    <div className='singe-tab'>
                        <h2>About</h2>
                    </div>
                
                </div>

                <div className='tab-content'>

                    {/* Historie indhold*/}
                    <div className='content'>
                        <h2>Historie</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                        <h3>Underoverskrift 3</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>

                    {/*Noget andet indhold*/}
                    <div className='content'>
                        <h2>Noget andet</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                        <h3>Underoverskrift 3</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>

                    {/*Noget andet indhold*/}
                    <div className='content'>
                        <div className='exp-column'>
                            <h3>Sælger</h3>
                            <span>2018-2022</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy te</p>     
                        </div>

                        <div className='exp-column'>
                            <h3>Sælger</h3>
                            <span>2018-2022</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy te</p>     
                        </div>

                        <div className='exp-column'>
                            <h3>Sælger</h3>
                            <span>2018-2022</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy te</p>     
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