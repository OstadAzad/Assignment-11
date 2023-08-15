import styles from "./Blog.module.css"
import Menu from '@/Components/Menu';

const page = () => {


  return (
    <div>
      <Menu/>
      <h1 className={styles.blog}>This is Blog Page</h1>
       
    </div>
  );
};

export default page;