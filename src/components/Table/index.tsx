import styles from './Table.module.scss'
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
        <div className={styles.tableBody}>
          <table>
            <thead>
              <tr>
                <th>Identificação</th>
                <th>RG </th>
                <th>CPF</th>
                <th>Celular</th>
              </tr>
            </thead>
            {currentItens.map((i) => {
              return (
                <tr key={i.id}>
                  <td>{i.name}</td>
                  <td>{i.rg}</td>
                  <td>{i.cpf}</td>
                  <td>{i.phone}</td>
                </tr>
              )
            })}
          </table>
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
