import React from 'react'
import TopNav from './layouts/TopNav'
import Styles from '../styles/healthTips.module.css'
import tip from '../img/tip.jpg'
import tip1 from '../img/tip1.jpg'
import tip2 from '../img/tip2.jpg'
import tip3 from '../img/tip3.jpg'


function HealthTips() {
    return (
        <div className='main'>
            <TopNav name = "Health Tips"/>
            <div className='main-content'>
                <div className={Styles.tipsWrap}>
                    <div className={Styles.tipsItem}>
                        <img src={tip} alt="" />
                        <div className={Styles.tipsText}>
                            <p className={Styles.tipsTitle}>How to exercise during pregnancy</p>
                            <button>Read</button>
                        </div>
                    </div>
                    <div className={Styles.tipsItem}>
                        <img src={tip1} alt="" />
                        <div className={Styles.tipsText}>
                            <p className={Styles.tipsTitle}>Living your best life</p>
                            <button>Read</button>
                        </div>
                    </div>
                    <div className={Styles.tipsItem}>
                        <img src={tip2} alt="" />
                        <div className={Styles.tipsText}>
                            <p className={Styles.tipsTitle}>The best diet for you and your baby</p>
                            <button>Read</button>
                        </div>
                    </div>
                    <div className={Styles.tipsItem}>
                        <img src={tip3} alt="" />
                        <div className={Styles.tipsText}>
                            <p className={Styles.tipsTitle}>The best places to visit</p>
                            <button>Read</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthTips;