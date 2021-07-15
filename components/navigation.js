import { Div } from "atomize";
import React from 'react'
import Link from 'next/link';
import styles from '../styles/Post.module.css'

const Navigation = () => {

    return (
        <Div
            bg="gray200"
            d="flex"
            p="1rem"
            justify="flex-end"
        >
            <Div m='0.5rem'>
                <Link href={`/`}>
                    <a className={styles.anchor}> Home </a>
                </Link>
            </Div>
        </Div>
    )
}

export default Navigation