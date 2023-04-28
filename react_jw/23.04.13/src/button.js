import styles from './button.module.css'

console.log(styles.btn)

function Button(props){
    return(
        <>
           <button className={styles.btn}>button</button>
           <button className='btn'>button</button>
        </>
    )
}
export default Button;