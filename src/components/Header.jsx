import React from "react";
import styled from 'styled-components'
export default function Header() {

    const btnMobile = document.getElementById('btnMobile')

    const toggleMenu = (()=> {
        const nav = document.getElementById('nav')
        nav.classList.toggle('active')

    })

    
    return(
        <header id="header">
            <a id="logo">Logo</a>
            <nav id="nav">
                <button id="btnMobile"  onClick={toggleMenu}>
                    <span id="hamburguer"></span>
                    Menu</button>
                <ul id="menu">
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Produtos</a></li>
                    <li><a href="/">Portfólio</a></li>
                    <li><a href="/">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}