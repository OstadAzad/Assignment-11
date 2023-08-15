import Link from "next/link";
import styles from './page.module.css';
import Menu from "@/Components/Menu";

const Page = () => {
    return (
        <div>
            <Menu/>
            <h1 className={styles.welcome}>Welcome to the Ostad Blog</h1>
            <Link className={styles.forwardBlogPage} href={"/Blog"}>Go to Blog Page</Link>
        </div>
    );
};

export default Page;