import styles from './Login.module.scss'
import Image from 'next/image'
import topRightImageFrame from '../../../public/imagers/topRightImageFrame.png'
import bottomLeftImageFrame from '../../../public/imagers/bottomLeftImageFrame.png'

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.imageTopContainer}>
        <Image
          className={styles.topRightImageFrame}
          src={topRightImageFrame}
          alt={'top-right-image-frame'}
        />
      </div>
      <div className={styles.centerContainer}>
        <div className={styles.boxCenterContainers}>
          <div>img</div>
          <div className={styles.rightBox}>Right</div>
        </div>
      </div>
      <div className={styles.imageBottomContainer}>
        <Image
          className={styles.bottomLeftImageFrame}
          src={bottomLeftImageFrame}
          alt={'bottom-left-image-frame'}
        />
      </div>
    </div>
  )
}
