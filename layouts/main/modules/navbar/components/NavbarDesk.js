import React from "react";
import logoSvg from './../../../../../project/image/layouts/navbar/svg/logo.svg'
import cartSvg from './../../../../../project/image/layouts/navbar/svg/cart.svg'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF,  faInstagram } from "@fortawesome/free-brands-svg-icons";


const NavbarDesk = ({classes, openMenu, langvich,
     setActiveLang, actLang, activeLang, watchCart, totalPrice, countProduct}) => {

    
   
    return (
    <div className={classes.navbar__items}>
        <div className={classes.navbar__logo}>
        <Link href="/">
            <img className={classes.navbar__logoImg} src={logoSvg} alt="logo" />
        </Link>
        </div>
        <div className={classes.navbar__items__positions}>
        <div className={classes.navbar__services}>
            <div onClick={openMenu} className={classes.navbar__services__item}>Меню</div>
            <div  className={classes.navbar__services__item}>Доставка</div>
            <Link href="/blog">
                <div className={classes.navbar__services__item}>Блог</div>
            </Link>
            <div className={classes.navbar__services__item}>Контакти</div>
        </div>
        <div className={classes.lang}>
            {langvich.map((lang, idx) => {
                return (
                    <div key={lang.id} onClick={() => setActiveLang(idx)} className={classes.lang__item} style={activeLang === lang.id ? actLang : {}}>{lang.title}</div>
                )
            })}
        </div>  
        <div className={classes.social__icons}>
            <FontAwesomeIcon className={classes.social__icon} icon={faFacebookF}></FontAwesomeIcon>
            <FontAwesomeIcon className={classes.social__icon} icon={faInstagram}></FontAwesomeIcon>
         </div>
        <div className={classes.phone}>
            <div className={classes.phone__title}>Замовити доставку</div>
            <a href="tel:+380672522737">
               <div className={classes.phone__number}>067-252-27-37</div>
            </a>
        </div>
        </div>
        <div  onClick={watchCart}  className={classes.cart}>
            <img className={classes.cartSvg} src={cartSvg} alt="cart" />
            <div className={classes.cart__items}>
                <div className={classes.cart__title}>Ваше замовлення</div>
                <div style={{display: 'flex'}}>
                     <div className={classes.cart__count}>{countProduct}</div>
                     <div className={classes.cart__razdel}> || </div>
                     <div className={classes.cart__total}>{totalPrice.toFixed(2)}</div>
                </div>
            </div>
        </div>
    </div>
    )
} 

export default NavbarDesk