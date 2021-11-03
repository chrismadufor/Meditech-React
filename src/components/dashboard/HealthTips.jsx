import React from 'react'
import tip from '../img/tip.jpg'
import tip1 from '../img/tip1.jpg'
import tip2 from '../img/tip2.jpg'
import tip3 from '../img/tip3.jpg'

function HealthTips() {
    return (
        <div class="tips-wrap">
              <div class="tips-item">
                  <img src={tip} alt="" />
                  <div class="tips-text">
                      <p class="tips-title">How to exercise during pregnancy</p>
                      <button>Read</button>
                  </div>
              </div>
              <div class="tips-item">
                  <img src={tip1} alt="" />
                  <div class="tips-text">
                      <p class="tips-title">Living your best life</p>
                      <button>Read</button>
                  </div>
              </div>
              <div class="tips-item">
                  <img src={tip2} alt="" />
                  <div class="tips-text">
                      <p class="tips-title">The best diet for you and your baby</p>
                      <button>Read</button>
                  </div>
              </div>
              <div class="tips-item">
                  <img src={tip3} alt="" />
                  <div class="tips-text">
                      <p class="tips-title">The best places to visit</p>
                      <button>Read</button>
                  </div>
              </div>
          </div>
    )
}

export default HealthTips
