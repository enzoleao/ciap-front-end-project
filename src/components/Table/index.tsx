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
        <table>
          <tr>
            <th>Identificação</th>
            <th>RG</th>
            <th>CPF</th>
            <th>Celular</th>
          </tr>
          <tbody>
            {currentItens.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.rg}</td>
                  <td>{item.cpf}</td>
                  <td>{item.phone}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
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
