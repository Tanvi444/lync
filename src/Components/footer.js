import React from "react";
import "../sass/footer.scss";
export default function footer() {
  return (

    <div className="back-footer">
      <div className="footer">
        <div className="box1-box2">
        <div className="box1">
          <h1>Axies</h1>
          <div>
          Non-fungible token is a unit of data stored on a blockchain, a form of digital ledger
          </div>
          

          <div id="logos">
            <div>
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
            <div>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
            <div>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
            <div>
              <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </div>
            <div>
              <i className="fa fa-pinterest-p" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div className="box2">

          <h2>Other Pages</h2>
          <div>
          <div> <i class="fa fa-chevron-right" aria-hidden="true"></i>Home</div>
          <div> <i class="fa fa-chevron-right" aria-hidden="true"></i>About Us</div>
          <div> <i class="fa fa-chevron-right" aria-hidden="true"></i>Services</div>
          <div><i class="fa fa-chevron-right" aria-hidden="true"></i>Token Sale</div>
          <div><i class="fa fa-chevron-right" aria-hidden="true"></i>Contact</div>
          </div>
          

        </div>
        </div>

        <div className="box3-box4">
        <div className="box3">
          <h2>Quick Links</h2>
          <div><i class="fa fa-chevron-right" aria-hidden="true"></i>Privacy Policy</div>
          <div><i class="fa fa-chevron-right" aria-hidden="true"></i>Term Of Services</div>
          <div><i class="fa fa-chevron-right" aria-hidden="true"></i>Disclaimer</div>
          <div><i class="fa fa-chevron-right" aria-hidden="true"></i>Credits</div>
          <div><i class="fa fa-chevron-right" aria-hidden="true"></i>FAQ</div>

        </div>
        <div className="box4">
          <h2> Newsletter</h2>
          <div style={{width:'20vw'}}>A newsletter is a printed or electro report containing news</div>
         
          <div className="input-send border-gradient">
          <input type="text" placeholder="Shoven985@gmail.com" className="footer-input"/>
          
          <button className="footer-button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
          </div>

         
        </div>
        
        </div>
        
        
      </div>
      <div className="last-footer">
            <p>NFT Cryptocurrency & Bitcoin Template Kit by Shovon</p>
            <p>NFT-Copyright @ 2021-2022 All rights reserved.</p>
          </div>
    </div>
  );
}