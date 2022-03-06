import styles from './style.module.scss'

const EmptyTemplate = () => {
    return <div className='wrapper'>
        <div className={styles.empty}>当前组件未配置内容</div>
    </div>
}

export default EmptyTemplate;
