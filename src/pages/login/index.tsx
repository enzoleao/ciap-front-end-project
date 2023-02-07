import styles from './Login.module.scss'
import Image from 'next/image'
import topRightImageFrame from '../../../public/imagers/topRightImageFrame.png'
import bottomLeftImageFrame from '../../../public/imagers/bottomLeftImageFrame.png'
import topImageFrameMobile from '../../../public/imagers/topImageFrameMobile.png'
import bottomImageFrameMobile from '../../../public/imagers/bottomImageFrameMobile.png'
export default function Login() {
  return (
    <div className={styles.login}>
      <div>
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
          <div className={styles.rightBox}></div>
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
    </div>
  )
}
