import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import styles from './index.module.css'
import './index.css'
import Card from './Componets/Card/Card'
import ButtonPromo from './Componets/ButtonPromo/ButtonPromo'
import Tittle from './Componets/Tittle/Tittle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tittle titulo='CLIENTES+'/>
    <ButtonPromo titulo='Promo'/>
    <div className={styles.div}>
      <Card nomeProd='Item1' descricao='1kg/Preço' preco='0000'/>
      <Card nomeProd='Item2' descricao='1kg/Preço' preco='0000'/>
      <Card nomeProd='Item3' descricao='1kg/Preço' preco='0000'/>
    </div>

    <Tittle titulo='OUTROS'/>
    <ButtonPromo titulo='Saudavel'/>
    <div className={styles.div}>
      <Card nomeProd='Item1' descricao='1kg/Preço' preco='0000'/>
      <Card nomeProd='Item2' descricao='1kg/Preço' preco='0000'/>
      <Card nomeProd='Item3' descricao='1kg/Preço' preco='0000'/>
    </div>
  </StrictMode>,
)
