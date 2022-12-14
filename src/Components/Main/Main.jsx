import React from 'react';
import './Main.css'

function Main(props) {
    return (
        <div className = 'DIV'>
        <h2 className='h2'>Оплата и доставка</h2>

        <div className='text'>


        <p className='tovar'>Выберите понравившийся товар, внимательно ознакомьтесь с его характеристиками и после этого добавьте его в вашу <br /> корзину при помощи кнопки «Добавить в корзину».
</p>
<p className='tovar'>Корзина доступна с любой страницы сайта, таким образом, вы в любой момент можете приступить к оформлению заказа.</p>
<p className='tovar'>Оформить заказ на доставку выбранного товара вы можете:<br />
Заполнив специальную форму заказа на нашем сайте в любое время суток.</p>
<p className='tovar'>В интернет-магазине «Кроха» вы можете осуществить оплату товара двумя способами:<br />
Наличными курьеру при получении заказа<br />
Безналичным расчетом посредством банковской карты (online)</p>
<p className='tovar'>После выбора способа оплаты перейдите на следующий шаг, чтобы подтвердить ваши данные <br />
и завершить оформление заказа.</p>

                    </div>
        </div>
    );
}

export default Main;