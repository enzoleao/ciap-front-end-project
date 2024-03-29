import Image from 'next/image'
import styles from './Login.module.scss'
import topRightImageFrame from '../../../public/imagers/topRightImageFrame.webp'
import bottomLeftImageFrame from '../../../public/imagers/bottomLeftImageFrame.webp'
import topImageFrameMobile from '../../../public/imagers/topImageFrameMobile.webp'
import bottomImageFrameMobile from '../../../public/imagers/bottomImageFrameMobile.webp'
import brasaoCiap from '../../../public/imagers/brasao_ciap.svg'
import brasaoPmpa from '../../../public/imagers/brasao_pmpa.svg'
import bonecaCiap from '../../../public/imagers/boneca-ciap.webp'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BiLockAlt } from 'react-icons/bi'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '@/contexts/AuthContext'

type dataUsers = {
  email: string
  password: string
}

export default function Login() {
  const [inputColorChangeEmail, setInputColorChangeEmail] = useState('#DFDFEE')
  const [inputColorChangePwd, setInputColorChangePwd] = useState('#DFDFEE')
  const [eyeSelector, setEyeSelector] = useState(1)

  const { register, handleSubmit } = useForm<dataUsers>()
  const { signIn } = useContext(AuthContext)
  const [passowordType, setPasswordType] = useState('password')

  const handleSingIn = async (data: dataUsers, e: any) => {
    e.preventDefault()
    try {
      await signIn(data)
    } catch (err) {
      console.log(err)
    }
  }
  const handleShowPassword = () => {
    setEyeSelector(0)
    setPasswordType('text')
  }
  const handleUnshowPassowrd = () => {
    setEyeSelector(1)
    setPasswordType('password')
  }
  return (
    <div className={styles.loginWrapper}>
      <Image
        className={styles.topRightImageFrame}
        src={topRightImageFrame}
        alt="top-right-frame-image"
      />
      <Image
        className={styles.topImageFrameMobile}
        src={topImageFrameMobile}
        alt="top-frame-mobile"
      />
      <div className={styles.loginContainer}>
        <main className={styles.loginCenterBox}>
          <section className={styles.leftBox}>
            <Image
              className={styles.bonecaImage}
              src={bonecaCiap}
              alt="boneca-ciap"
            />
          </section>
          <section className={styles.rightBox}>
            <form onSubmit={handleSubmit(handleSingIn)} action="">
              <div className={styles.formSection}>
                <div className={styles.boxInputsFirst}>
                  <div className={styles.inputsBox}>
                    <MdOutlineMailOutline
                      color={inputColorChangeEmail}
                      className={styles.iconsInput}
                      size={20}
                    />
                    <input
                      {...register('email')}
                      onFocus={() => setInputColorChangeEmail('#2e3094')}
                      onBlur={() => setInputColorChangeEmail('#DFDFEE')}
                      placeholder="Email:"
                      type="email"
                      required
                      autoComplete="true"
                    />
                  </div>
                  <div className={styles.inputsBox}>
                    <BiLockAlt
                      id="lockIcon"
                      color={inputColorChangePwd}
                      className={styles.iconsInput}
                      size={20}
                    />
                    <input
                      {...register('password')}
                      required
                      onFocus={() => setInputColorChangePwd('#2e3094')}
                      onBlur={() => setInputColorChangePwd('#DFDFEE')}
                      placeholder="Senha:"
                      type={passowordType}
                    />
                  </div>
                </div>
                {eyeSelector === 1 ? (
                  <AiFillEyeInvisible
                    size={20}
                    onClick={handleShowPassword}
                    className={styles.eyePassword}
                    color={inputColorChangePwd}
                  />
                ) : (
                  <AiFillEye
                    size={20}
                    onClick={handleUnshowPassowrd}
                    className={styles.eyePassword}
                    color={inputColorChangePwd}
                  />
                )}
                <span className={styles.forgetPasswordSpan}>
                  <a href="#">Esqueci minha senha</a>
                </span>
                <button type="submit">ENTRAR</button>
              </div>
            </form>
            <footer>
              <div>
                <hr />
                <Image
                  className={styles.footerImage}
                  src={brasaoCiap}
                  alt="brasao_ciap"
                />
              </div>
              <div>
                <hr />
                <Image
                  className={styles.footerImage}
                  src={brasaoPmpa}
                  alt="brasao_pmpa"
                />
              </div>
            </footer>
          </section>
        </main>
        <footer className={styles.systemNameFooter}>
          <p className={styles.systemName}>
            SISTEMA DE GESTÃO DE PRONTUÁRIOS - CIAP
          </p>
          <p className={styles.ciapName}>
            CENTRO INTEGRADO DE ATENÇÃO PSICOSSOCIAL{' '}
          </p>
        </footer>
      </div>
      <Image
        className={styles.bottomLeftImageFrame}
        src={bottomLeftImageFrame}
        alt="Bottom-image-frame-moldure"
      />
      <Image
        className={styles.bottomImageFrameMobile}
        src={bottomImageFrameMobile}
        alt="Bottom-image-frame-moldure"
      />
    </div>
  )
}
