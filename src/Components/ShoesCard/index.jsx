
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from "./styles.css"
import rectanguleshoes from '../../assets/rectangule-shoes-01.png'
import rectanguleshoes2 from '../../assets/rectangule-shoes-02.png'
import rectanguleshoes3 from '../../assets/rectangule-shoes-03.png'


export default function ShoesCard() {
  return (
    <section className="container-shoes-card">
      <div className="text-shoes-card">
          <p className='title'>Categorias</p>
          <p className="subtitle">Escolha o melhor estilo que se adapta ao seu toque</p>
          <p className="description">Nossa variedade de estilos de sapatos se junta ao conforto e adaptabilidade do seus pés. Cores, texturas, formas, encontre a forma de se expressar no calçado.</p>
      </div>
      <div className="cards-wrapper">
        <div className="img-wrapper"><img className='image' src={rectanguleshoes} /></div>
        <img className='image' src={rectanguleshoes2} />
        <img className='image' src={rectanguleshoes3} />      
                           
            </div>
    </section>
  )
}