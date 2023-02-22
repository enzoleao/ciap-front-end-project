import styles from './Employes.module.scss'
import { RxMagnifyingGlass } from 'react-icons/rx'
import Table from '../Table'
import { Users } from '../../services/userServices'
export default function Employes() {
  return (
    <div className={styles.employesContainer}>
      <section className={styles.firstSection}>
        <div>
          <RxMagnifyingGlass className={styles.searchInputIcon} />
          <input type="text" placeholder="Pesquisar..." />
        </div>
        <button>NOVO FUNCIONÁRIO</button>
      </section>
      <section className={styles.secondSection}>
        <p className={styles.recentlySearchedHeader}>Abertos Recentemente</p>
        <hr />
        <div className={styles.recentlySearched}>
          {Users.map((i) => {
            return (
              <div key={i.id} className={styles.usersRecentlySearched}>
                <img src={i.avatar} alt="user-avatar" />
                <p>{i.name}</p>
              </div>
            )
          })}
        </div>
      </section>
      <section className={styles.thirdSection}>
        <Table />
      </section>
    </div>
  )
}
