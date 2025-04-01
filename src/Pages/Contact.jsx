import React from 'react'
import '../assets/CSS/contact.css'

const Contact = () => {
  return (
    <div className="content contact">
   

    {/* FOLLOW US SECTION */}
    <section className='mt-3'>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="wrap-follow">
              <h4 className="title">FOLLOW US</h4>
              <ul>
                <li>
                  <img src="/public/icon/fb.png" width="40px" alt="Facebook" />
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <img src="/public/icon/yt.png" width="40px" alt="Youtube" />
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <img src="/public/icon/ig.jfif" width="40px" alt="Instagram" />
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <img src="/public/icon/telegram.png" width="40px" alt="Telegram" />
                  <a href="#">Telegram</a>
                </li>
                <li>
                  <img src="/public/icon/gmail-1.png" width="40px" alt="Email" />
                  <a href="#">Email</a>
                </li>
                <li>
                  <img src="/public/icon/tiktok.png" width="40px" alt="TikTok" />
                  <a href="#">TikTok</a>
                </li>
                <li>
                  <img src="/public/icon/phone.jpg" width="40px" alt="Phone" />
                  <a href="#">012 333 444 / 010 232 323</a>
                </li>
              </ul>
            </div>
          </div>

          {/* FEEDBACK FORM */}
          <div className="col-8">
            <div className="wrap-contact">
              <h4 className="title">FEEDBACK TO US</h4>
              <form action="#" method="post">
                <div className="row">
                  <div className="col-6">
                    <div className="label">Username</div>
                    <input type="text" className="box" placeholder="Username" required />
                  </div>
                  <div className="col-6">
                    <div className="label">Email</div>
                    <input type="email" className="box" placeholder="Email" required />
                  </div>
                  <div className="col-6">
                    <div className="label">Telephone</div>
                    <input type="tel" className="box" placeholder="Telephone" required minLength="9" maxLength="10" />
                  </div>
                  <div className="col-6">
                    <div className="label">Address</div>
                    <input type="text" className="box" placeholder="Address" required />
                  </div>
                  <div className="col-12">
                    <div className="label">Message</div>
                    <textarea cols="30" rows="10" placeholder="Message Here" required></textarea>
                  </div>
                  <div className="col-12">
                    <div className="wrap-btn">
                      <button type="submit" name="btn_message">
                      <i class="fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
    
  </div>
  )
}

export default Contact