import React from "react";

function Connect (){
    return(
        <div>
            <div id="connect" className="block">   
                <section id="home">
                    <div className ="row background-color-about"></div>
                        <div className="col s12  aboutme-col">
                
                            <p> <span className="enlarge"> contact me: </span> clairebohlen@gmail.com</p>
                        </div>

              
                  
                        <footer className="page-footer footer" style="background-color:#42ffba;">
                            <div className="container">
                                <div className="row">
                                    <div className="col l6 s12">
                                         <h5 className="white-text"></h5>
                                            <p className="grey-text text-lighten-4"></p>
                                            <ul className="contact-icons">
                                                <a href="https://github.com/ClaireBohlen">
                                                <img className="github" alt="gitHub" src="./assest/images/Github.svg"/> </a>
                                                <a href ="https://www.linkedin.com/in/claire-bohlen-63a4b5119/">
                                                <img className="linkedIn" alt="Linked In Link" src="./assest/images/LI.svg"/> </a>
                                            </ul>
                          
                                    </div>
                        
                                </div>
                            </div>
                    
                        </footer>
                </section>   
          </div> 
        </div>
    )
}
export default Connect;