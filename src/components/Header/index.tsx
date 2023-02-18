import styles from './Header.module.scss'
import { useAuth } from '@/contexts/AuthContext'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'
import { MdOutlinePowerSettingsNew } from 'react-icons/md'
export default function Header() {
  const { showSiderBar, visibilityUserDropDown, setVisibilityDropDownUser } =
    useAuth()

  return (
    <header className={styles.headerContainer}>
      <button className={styles.sideBarButton} onClick={showSiderBar}>
        <GiHamburgerMenu color={'#E1E3EF'} className={styles.sideBarIcon} />
      </button>
      <div
        onClick={setVisibilityDropDownUser}
        className={styles.rightBoxHeader}
      >
        <p>Juliana Moura</p>
        <img src="https://github.com/enzoleao.png" alt="user-avatar" />
      </div>
      <nav
        className={
          visibilityUserDropDown
            ? styles.dropDownUserActive
            : styles.dropDownUser
        }
      >
        <ul>
          <li>
            <FaUserCircle className={styles.iconsDropDownMenu} />
            Editar Perfil
          </li>
          <li className={styles.lastLi}>
            <MdOutlinePowerSettingsNew className={styles.iconsDropDownMenu} />
            Finalizar Sessão
          </li>
        </ul>
      </nav>
    </header>
  )
}
