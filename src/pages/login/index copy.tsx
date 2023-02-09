import styles from './Login.module.scss'
import Image from 'next/image'
import topRightImageFrame from '../../../public/imagers/topRightImageFrame.png'
import bottomLeftImageFrame from '../../../public/imagers/bottomLeftImageFrame.png'
import topImageFrameMobile from '../../../public/imagers/topImageFrameMobile.png'
import bottomImageFrameMobile from '../../../public/imagers/bottomImageFrameMobile.png'
import brasaoCiap from '../../../public/imagers/brasao_ciap.webp'
import brasaoPmpa from '../../../public/imagers/brasao_pmpa.webp'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BiLockAlt } from 'react-icons/bi'
import { useState } from 'react'

export default function Login() {
  // const [colorIcon, setColorIcon] = useState('#DFDFEE')
  // const [colorIcon2, setColorIcon2] = useState('#DFDFEE')
  return (
    <div className={styles.wrapper}>
      <img />
      <div className={styles.container}>
        <main className={styles.loginContainer}>
          <section className={styles.avatarSection}>
            <img />
          </section>
          <section className={styles.formSection}>
            <form>
              <div>
                <input type="text" />
                <input type="text" />
              </div>
              <p>Esqueci minha senha</p>
              <button>Entrar</button>
            </form>
          </section>
        </main>
        <div className={styles.systemTitle}>
          <p></p>
          <p></p>
        </div>
      </div>

      <img />
    </div>
  )
}
