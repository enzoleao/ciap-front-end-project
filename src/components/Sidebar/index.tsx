import styles from './Sidebar.module.scss'
import brasaoCiap from '../../../public/imagers/brasao_ciap.svg'
import Image from 'next/image'
import { FaUser, FaClipboardList, FaUsers } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import { BiHome } from 'react-icons/bi'
import { useAuth } from '@/contexts/AuthContext'
export default function Sidebar() {
  const { showSideBar, setShowCasesDashboard, showDashboardCases } = useAuth()

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
        <li
          className={
            showDashboardCases === 'home'
              ? styles.liItensActive
              : styles.liItens
          }
          onClick={() => setShowCasesDashboard('home')}
        >
          <BiHome className={styles.liIcons} />
          Dashboard
        </li>
        <li
          className={
            showDashboardCases === 'funcionarios'
              ? styles.liItensActive
              : styles.liItens
          }
          onClick={() => setShowCasesDashboard('funcionarios')}
        >
          <FaUsers className={styles.liIcons} />
          Funcionários
        </li>
        <li
          className={
            showDashboardCases === 'usuarios'
              ? styles.liItensActive
              : styles.liItens
          }
          onClick={() => setShowCasesDashboard('usuarios')}
        >
          <FaUser className={styles.liIcons} />
          Usuários
        </li>
        <li
          className={
            showDashboardCases === 'relatorios'
              ? styles.liItensActive
              : styles.liItens
          }
          onClick={() => setShowCasesDashboard('relatorios')}
        >
          <FaClipboardList className={styles.liIcons} />
          Relatórios
        </li>
        <li
          className={
            showDashboardCases === 'configuracoes'
              ? styles.liItensActive
              : styles.liItens
          }
          onClick={() => setShowCasesDashboard('configuracoes')}
        >
          <MdSettings className={styles.liIcons} />
          Configurações
        </li>
      </ul>
    </aside>
  )
}
