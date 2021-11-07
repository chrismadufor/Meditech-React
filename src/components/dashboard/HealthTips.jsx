import React from 'react'
import tip from '../img/tip.jpg'
import tip1 from '../img/tip1.jpg'
import tip2 from '../img/tip2.jpg'
import tip3 from '../img/tip3.jpg'
import { connect } from "react-redux";

const mapStateToProps = state => ({
    ...state
  });

function HealthTips(props) {
    React.useEffect(() => {
        console.log(props)
    }, [])
    return (
        <div className="tips-wrap">
              <div className="tips-item">
                  <img src={tip} alt="" />
                  <div className="tips-text">
                      <p className="tips-title">How to exercise during pregnancy</p>
                      <button>Read</button>
                  </div>
              </div>
              <div className="tips-item">
                  <img src={tip1} alt="" />
                  <div className="tips-text">
                      <p className="tips-title">Living your best life</p>
                      <button>Read</button>
                  </div>
              </div>
              <div className="tips-item">
                  <img src={tip2} alt="" />
                  <div className="tips-text">
                      <p className="tips-title">The best diet for you and your baby</p>
                      <button>Read</button>
                  </div>
              </div>
              <div className="tips-item">
                  <img src={tip3} alt="" />
                  <div className="tips-text">
                      <p className="tips-title">The best places to visit</p>
                      <button>Read</button>
                  </div>
              </div>
          </div>
    )
}

export default connect(mapStateToProps)(HealthTips);