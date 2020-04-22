/*jshint esversion: 6 */
import React, {Component} from 'react';
import Card from './Card.js';
import Bg_1 from '../images/Bg_1.jpg';

class Home extends Component {
  render(){
    return(
      <div>
      <div class="hero-wrap js-fullheight" style={{backgroundImage:'url(${Bg_1})', height: '736px',backgroundPosition:'50% 50%'}} data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true" style={{height: '736px'}}>
            <div class="col-md-12 ftco-animate fadeInUp ftco-animated">
             <h2 class="subheading">Hello! Welcome to</h2>
             <h1 class="mb-4 mb-md-0">/devit blog</h1>
             <div class="row">
               <div class="col-md-7">
                 <div class="text">
                   <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                   <div class="mouse">
                     <a href="#" class="mouse-icon">
                       <div class="mouse-wheel"><span class="ion-ios-arrow-round-down"></span></div>
                     </a>
                   </div>
                 </div>
               </div>
             </div>
            </div>
          </div>
        </div>
      </div>
      <section class="ftco-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
            
              <Card/>

               <div class="row mt-5">
                <div class="col text-center">
                  <div class="block-27">
                    <ul>
                      <li><a href="#">&lt;</a></li>
                      <li class="active"><span>1</span></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">&gt;</a></li>
                    </ul>
                  </div>
                </div>
              </div>

          </div>
         </div>
        </div>
       </section>



       <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>
      </div>
    );
  }
}



export default Home;
