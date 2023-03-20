import Head from "next/head";
// import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";

export default function FirstPost() {
    const requestAPI = async () => {
        const response = await axios.get(`${process.env.BACKEND_API}/posts/1/comments`);
        console.log('req API nih', response);
    }
    useEffect(() => {
        requestAPI()
    })
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            {/* <img src="/images/profile.jpg" alt="My Name"/> */}
            <Image
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt="My Profile Picture"
            />
            <h1>First Page</h1>
            <h2><Link href="/">Back to home</Link></h2>
            <hr />
        </>
    )
}