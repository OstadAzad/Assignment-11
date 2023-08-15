import Menu from '@/Components/Menu';
import React from 'react';
import styles from "./Post.module.css"

const page = () => {
  return (
    <div>
      <Menu/>
      <h1 className={styles.post}>This is Post Page</h1>
    </div>
  );
};

export default page;