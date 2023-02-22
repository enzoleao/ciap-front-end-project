import styles from './Table.module.scss'
export default function Table() {
  return (
    <table className={styles.tableContainer}>
      <tr>
        <th>Identificação</th>
        <th>RG</th>
        <th>CPF</th>
        <th>Celular</th>
      </tr>
      <tbody className={styles.tbodyteste}>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td>Germany</td>
        </tr>
      </tbody>
    </table>
  )
}
