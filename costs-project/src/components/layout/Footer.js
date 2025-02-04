import {FaWhatsapp, FaInstagram, FaArrowCircleUp} from 'react-icons/fa'
// import wpp from 'https://wa.me/5541920035760'
import styles from './Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.listStyle}>

                <ul className={styles.adress}>
                    <li className={styles.linkMaps}>
                        <a id={styles.linkAdress} href={'https://maps.app.goo.gl/Fc52AcxyFNBe4PGj6'} target={'_blank'}>Av. da República, 4370 1º andar - sala 13 - Parolin, Curitiba - PR, 80220-430</a>
                        <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.109446510196!2d-49.26072682352821!3d-25.46802063439915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce46190186223%3A0x2f0d289e9e415809!2sCroma%20Films%20-%20Pel%C3%ADculas%20para%20Prote%C3%A7%C3%A3o%20solar!5e0!3m2!1spt-BR!2sbr!4v1737476535981!5m2!1spt-BR!2sbr"} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>                        
                    </li>
                </ul>

                <ul className={styles.social_list}>
                    <li>
                        <a href='https://wa.me/5541920035760' target='_blank'>
                            <FaWhatsapp/>
                        </a>
                    </li>
                    <li>
                        <FaInstagram/>
                    </li>
                </ul>
            </div>
            <p className={styles.copy_right}><span>Croma Films</span> &copy; 2024</p>
        </footer>
    )
}

export default Footer