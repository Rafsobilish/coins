import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';

export default function Home () {
  return (
    <div className={styles.All}>
    <div>
        <Header/>
    </div>
    <div className={styles.Center}>
      <div className={styles.Header}>
        <div className={styles.Dollar1}><CurrencyBitcoinOutlinedIcon/></div>
        <h3>COIN</h3>
        <div className={styles.Dollar2}><CurrencyBitcoinOutlinedIcon/></div>
      </div>
      <div className={styles.Coins}>
        <h1> ←make a choice</h1>
      </div>
    </div>
    </div>
  )
  }