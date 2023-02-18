import styles from './Sidebar.module.scss'
import brasaoCiap from '../../../public/imagers/brasao_ciap.svg'
import Image from 'next/image'
import { FaUser, FaClipboardList, FaUsers } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import { BiHome } from 'react-icons/bi'
import { useAuth } from '@/contexts/AuthContext'
export default function Sidebar() {
  const { showSideBar } = useAuth()

  return (
    <aside
      className={showSideBar ? styles.newSidestyles : styles.sideBarContainer}
    >
      <header>
        <p>SISTEMA DE GESTÃO DE PRONTUÁRIOS - CIAP</p>
        <Image
          src={brasaoCiap}
          className={styles.imagesHeader}
          alt="ciap-logo-sidebar"
        />
      </header>
      <ul>
        <li>
          <BiHome className={styles.liIcons} />
          Dashboard
        </li>
        <li>
          <FaUsers className={styles.liIcons} />
          Funcionários
        </li>
        <li>
          <FaUser className={styles.liIcons} />
          Usuários
        </li>
        <li>
          <FaClipboardList className={styles.liIcons} />
          Relatórios
        </li>
        <li>
          <MdSettings className={styles.liIcons} />
          Configurações
        </li>
      </ul>
    </aside>
  )
}
