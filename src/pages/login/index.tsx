import styles from './Login.module.scss'
import Image from 'next/image'
import topRightImageFrame from '../../../public/imagers/topRightImageFrame.png'
import bottomLeftImageFrame from '../../../public/imagers/bottomLeftImageFrame.png'
import topImageFrameMobile from '../../../public/imagers/topImageFrameMobile.png'
import bottomImageFrameMobile from '../../../public/imagers/bottomImageFrameMobile.png'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BiLockAlt } from 'react-icons/bi'
import { useState } from 'react'
export default function Login() {
  const [colorIcon, setColorIcon] = useState('#DFDFEE')
  const [colorIcon2, setColorIcon2] = useState('#DFDFEE')
  return (
    <div className={styles.login}>
      <div className={styles.topContainerImages}>
        <Image
          className={styles.topRightImageFrame}
          src={topRightImageFrame}
          alt={'top-right-image-frame'}
        />
        <Image
          className={styles.topImageFrameMobile}
          src={topImageFrameMobile}
          alt={'top-image-frame-mobile'}
        />
      </div>
      <div className={styles.centerContainer}>
        <div className={styles.boxCenterContainers}>
          <div className={styles.leftBox}></div>
          <div className={styles.rightBox}>
            <div className={styles.boxInputsAll}>
              <div className={styles.inputStylesBoxs}>
                <MdOutlineMailOutline
                  className={styles.inputIcons}
                  color={colorIcon2}
                  width={20}
                  height={16}
                />
                <input
                  onFocus={() => setColorIcon2('#2E3094')}
                  onBlur={() => setColorIcon2('#DFDFEE')}
                  type="text"
                  className={styles.usersInputBox}
                  placeholder="Email:"
                />
              </div>
              <div className={styles.inputStylesBoxs}>
                <BiLockAlt
                  className={styles.inputIcons}
                  color={colorIcon}
                  width={20}
                  height={16}
                />
                <input
                  onFocus={() => setColorIcon('#2E3094')}
                  onBlur={() => setColorIcon('#DFDFEE')}
                  type="password"
                  className={styles.usersInputBox}
                  placeholder={`Senha:`}
                />
              </div>
            </div>
            <div className={styles.containerForgetLink}>
              <a className={styles.ForgetLink} href="#">
                Esqueci minha senha
              </a>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.buttonLogin}>ENTRAR</button>
            </div>
          </div>
        </div>
        <div className={styles.ciapNameFooter}>
          <span className={styles.firstNameFooter}>
            SISTEMA DE GESTÃO DE PRONTUÁRIOS - CIAP
          </span>
          <span className={styles.secondNameFooter}>
            CENTRO INTEGRADO DE ATENÇÃO PSICOSSOCIAL
          </span>
        </div>
      </div>
      <div className={styles.bottomContainerImages}>
        <Image
          className={styles.bottomLeftImageFrame}
          src={bottomLeftImageFrame}
          alt={'bottom-left-image-frame'}
        />
        <Image
          className={styles.bottomImageFrameMobile}
          src={bottomImageFrameMobile}
          alt={'top-right-image-frame'}
        />
      </div>
    </div>
  )
}
