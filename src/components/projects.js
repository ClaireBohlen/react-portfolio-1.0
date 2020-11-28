import React from "react";

function Projects (){
    return (
        <div>
                <div class="row" id="cards">
                    <div class="col s12 m2"></div>
                        {/* <!-- Card Structure --> */}
                    <div class="col s12 m2 hover">
                        <div class="card-content card-color waves-effect waves-light btn modal-trigger hover-class" href="#modal1"  id="hover" style="height: 200px; width:200px; background-color: #0adfb3; border-radius: 25px;">
                            <p>
                            
                            <img class="img-bell" alt="hotel bell icon" src="./assest/images/bell.svg"/>   
                        
                            </p>
                            {/* <!-- <a class="waves-effect waves-light btn modal-trigger move-button" href="#modal1">Modal</a> --> */}
                        </div>
                    </div>
                        {/* <!-- Modal Structure --> */}
                    <div id="modal1" class="modal">
                        <div class="modal-content">
                            <h4>Hotel Property Management System</h4>
                            <p>A bunch of text</p>
                        
                        </div>
                        <div class="modal-footer">
                            {/* <!-- Modal Footer Links --> */}
                            <a href="https://github.com/ryanwit/hotel_motel" class="modal-close waves-effect waves-green btn-flat">GitHub</a>
                            <a href="https://hotelmotel.herokuapp.com/" class="modal-close waves-effect waves-green btn-flat">Deployed</a>
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat">X</a>
                        </div>
                    </div>

                    {/* <!-- Card Structure --> */}
                    <div class="col s12 m2">
                        <div class="card-content card-color waves-effect waves-light btn modal-trigger hover-class" href="#modal2" style="height: 200px; width:200px; background-color: #0adfb3; border-radius: 25px;">
                            <p>

                            <img class="img-bell" alt="hotel bell icon" src="./assest/images/park.svg"/> 


                            </p>
                            {/* <!-- <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> --> */}
                        </div>
                    </div>
                        {/* <!-- Modal Structure --> */}
                    <div id="modal2" class="modal">
                        <div class="modal-content">
                            <h4>National Parks API</h4>
                            <p>A bunch of text</p>
                        </div>
                        <div class="modal-footer">
                            {/* <!-- Modal Footer Links --> */}
                            <a href="https://github.com/tmessall/dubootcampProjectOne" class="modal-close waves-effect waves-green btn-flat">GitHub</a>
                            <a href="https://tmessall.github.io/dubootcampProjectOne/" class="modal-close waves-effect waves-green btn-flat">Deployed</a>
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat">X</a>
                        </div>
                    </div>
                        {/* <!-- Card Structure --> */}
                    <div class="col s12 m2">
                        <div class="card-content card-color waves-effect waves-light btn modal-trigger hover-class" href="#modal3" style="height: 200px; width:200px; background-color: #0adfb3; border-radius: 25px;">
                            <p>
                            <img class="img-bell" alt="hotel bell icon" src="./assest/images/fitness.svg"/> 
                            </p>
                            {/* <!-- <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> --> */}
                        </div>
                    </div>
                        {/* <!-- Modal Structure --> */}
                    <div id="modal3" class="modal">
                        <div class="modal-content">
                            <h4>Fitness Tracker</h4>
                            <p>A bunch of text</p>
                        </div>
                        <div class="modal-footer">
                            {/* <!-- Modal Footer Links --> */}
                            <a href="https://github.com/ClaireBohlen/fitnessTracker" class="modal-close waves-effect waves-green btn-flat">GitHub</a>
                            <a href="https://fierce-spire-72446.herokuapp.com/ " class="modal-close waves-effect waves-green btn-flat">Deployed</a>
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat">X</a>
                        </div>
                    </div>
                    {/* <!-- Card Structure --> */}
                    <div class="col s12 m2">
                        <div class="card-content card-color waves-effect waves-light btn modal-trigger hover-class" href="#modal4" style="height: 200px; width:200px; background-color: #0adfb3; border-radius: 25px;">
                            <p>
                            <img class="img-bell" alt="hotel bell icon" src="./assest/images/read.svg"/> 
                            </p>
                            {/* <!-- <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> --> */}
                        </div>
                    </div>
                        {/* <!-- Modal Structure --> */}
                    <div id="modal4" class="modal">
                        <div class="modal-content">
                            <h4>Read Me Generator</h4>
                            <p>A bunch of text</p>
                        </div>
                        <div class="modal-footer">
                            {/* <!-- Modal Footer Links --> */}
                            <a href="https://github.com/ClaireBohlen/readMeGenerator" class="modal-close waves-effect waves-green btn-flat">GitHub</a>
                            <a href="https://hotelmotel.herokuapp.com/" class="modal-close waves-effect waves-green btn-flat">Deployed</a>
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat">X</a>
                        </div>
                    </div>
                    
                </div>
            
            </div>

   
    ) }

export default Projects;
