import React from 'react'
import '../users/style.scss'
const Users = () => {
    return (
        <div className='user'>
            <h1>Faculty Members</h1>
            <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. <br /> You may see some for as low as $.17 each.</p>
            <div className="cards">
                <div className="card">
                    <img width={250} src="https://preview.colorlib.com/theme/educature/img/faculty/f1.jpg" alt="" />
                    <h2>Ethel Davis</h2>
                    <p>Sr. Faculty Data Science</p>
                    <span>If you are looking at blank cassettes on the web, you may be very confused at the difference in price.</span>
                    <div className="icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>

                <div className="card">
                    <img width={250} src="https://preview.colorlib.com/theme/educature/img/faculty/f2.jpg" alt="" />
                    <h2>Rodney Cooper</h2>
                    <p>Sr. Faculty Data Science</p>
                    <span>If you are looking at blank cassettes <br /> on the web, you may be very confused <br /> at the difference in price.</span>
                    <div className="icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>

                <div className="card">
                    <img width={250} src="https://preview.colorlib.com/theme/educature/img/faculty/f3.jpg" alt="" />
                    <h2>Dora Walker</h2>
                    <p>Sr. Faculty Data Science</p>
                    <span>If you are looking at blank cassettes <br /> on the web, you may be very confused <br /> at the difference in price.</span>
                    <div className="icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>

                <div className="card">
                    <img width={250} src="https://preview.colorlib.com/theme/educature/img/faculty/f4.jpg" alt="" />
                    <h2>Lena Keller</h2>
                    <p>Sr. Faculty Data Science</p>
                    <span>If you are looking at blank cassettes <br /> on the web, you may be very confused <br /> at the difference in price.</span>
                    <div className="icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Users