import styles from './Tablecard.module.scss'

interface TableCardProps {
  name: string
  rg: number
  cpf: string
  number: string
}
export default function Tablecard(props: TableCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cadInformation}>
        <p className={styles.pName}>{props.name}</p>
        <p className={styles.pOthersInformations}>{props.rg}</p>
        <p className={styles.pOthersInformations}>{props.cpf}</p>
        <p className={styles.pOthersInformations}>{props.number}</p>
      </div>
    </div>
  )
}
