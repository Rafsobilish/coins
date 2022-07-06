import FitbitOutlinedIcon from '@mui/icons-material/FitbitOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import styles from '../styles/Header.module.css'
import Link from 'next/link';

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.headericon}>
                <div className={styles.dollars1}> <AttachMoneyOutlinedIcon fontSize='medium'/> </div>
                <FitbitOutlinedIcon fontSize='large'/>
                <div className={styles.dollars2}> <EuroOutlinedIcon fontSize='small'/> </div>
            </div>
            <div>
                <div className={styles.Voting}>
                <Link href='http://localhost:3000/Voting'><a>voting</a></Link> 
                </div>
                <div className={styles.Voting}>
                <Link href='http://localhost:3000/Statistics'><a>statistics</a></Link> 
                </div>
            </div>
        </div>
    )
}
export default Header