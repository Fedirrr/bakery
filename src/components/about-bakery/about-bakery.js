import React from 'react'
import './about-bakery.css'

const AboutBakery = () => {
    return (
        <div className='container'>
            <div className='payment'>
                <div className="items">
                    <i className="fas fa-box-open"></i>
                    <p className='itemText'>Гарантія якості</p>
                </div>

                <div className="items">
                    <i className="fas fa-wallet"></i>
                    <p className='itemText'>Зручна форма  <br/> оплати</p>
                </div>

                <div className="items">
                    <i className="fas fa-thumbs-up"></i>
                    <p className='itemText'>Індивідуальний <br/> підхід</p>
                </div>
            </div>
            <div className='aboutBakery'>
                <h1>Пекарня Севлюш - ми поважаємо хліб!</h1>
                <p>Ми пропонуємо онлайн-сервіс із замовлення та доставки круасанів, сендвічів, печива, хліба та багетів.</p>
                <p>Вся випічка створюється нашими пекарями і кондитерами на сучасному хлібоперкарському обладнанні з дотриманням найвищих вимог до якості.</p>
                <img src="https://kopershe.com/content/uploads/images/production.jpg" alt="ddd"/>
            </div>
        </div>
    )
}

export default AboutBakery
