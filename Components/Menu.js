import Link from 'next/link';
import React from 'react';

const Menu = () => {
    return (
        <div>
            <Link href={"/"}>Home</Link><br/>
            <Link href={"/Blog"}>Blog</Link><br/>
            <Link href={"/Post"}>Post</Link><br/>
        </div>
    );
};

export default Menu;