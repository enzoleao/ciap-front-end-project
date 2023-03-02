import styles from './Table.module.scss'
import TableCard from '../TableCard'
import { useState } from 'react'
import { Users } from '../../services/userServices'

export default function Table() {
  const itensPerPage = 8
  const [currentPage, setCurrentPage] = useState(0)

  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const pages = Math.ceil(Users.length / itensPerPage)

  const currentItens = Users.slice(startIndex, endIndex)

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableSection}>
        <header>
          <p className={styles.pName}>NOME</p>
          <p className={styles.othersP}>RG</p>
          <p className={styles.othersP}>CPF</p>
          <p className={styles.othersP}>NUMERO</p>
        </header>
        <div className={styles.tableBody}>
          {currentItens.map((item) => {
            return (
              <TableCard
                key={item.id}
                name={item.name}
                rg={item.rg}
                cpf={item.cpf}
                number={item.phone}
              />
            )
          })}
        </div>
      </div>
      <div className={styles.footerPagination}>
        <p>Mostrando 1 - 8 de {Users.length} cadastros</p>
        <div className={styles.paginationsFooterSection}>
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {`<`}
          </button>
          <div>
            <p>{currentPage + 1}</p>
          </div>
          <button
            disabled={currentPage + 1 === pages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {`>`}
          </button>
        </div>
      </div>
    </div>
  )
}
