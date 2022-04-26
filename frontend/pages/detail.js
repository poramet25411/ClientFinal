import Layout from '../components/layout'
import Head from 'next/head'
import config from '../config/config'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Link from 'next/link'

const detail = () => {
    return (<Layout>

        <div className={styles.container}>
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <h2>สมาชิกในทีม</h2>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
<br></br>
alisson becker <br></br>
            <a href="https://www.instagram.com/alissonbecker/?hl=th">
                <img  src="https://i.pinimg.com/originals/dc/67/9e/dc679e7aa30d868405544e519fae2ad9.jpg"  width="250" height="250" ></img></a>   
                <br></br>
                Mohamed Salah <br></br>
            <a href="https://www.instagram.com/mosalah/?hl=th">
                <img  src="https://i2-prod.liverpool.com/incoming/article23331002.ece/ALTERNATES/s1200c/1_Salah.jpg"  width="250" height="250" ></img></a>   
                <br></br>
                Sadio Mane <br></br>
            <a href="https://www.instagram.com/sadiomaneofficiel/?hl=th">
                <img  src="https://i2-prod.liverpoolecho.co.uk/incoming/article23382705.ece/ALTERNATES/s1200b/1_GettyImages-1384554540.jpg"  width="250" height="250" ></img></a>   
                <br></br>
                ROBERTO FIRMINO <br></br>
            <a href="https://www.instagram.com/roberto_firmino/?hl=th">
                <img  src="https://i2-prod.liverpoolecho.co.uk/incoming/article21342232.ece/ALTERNATES/s1200c/0_GettyImages-1334150468.jpg"  width="250" height="250" ></img></a>   
                <br></br>
                Virgil van Dijk <br></br>
            <a href="https://www.instagram.com/virgilvandijk/?hl=th">
                <img  src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg3NjI4NjY3ODM1MjYyMjA3/imago1010101492h.jpg"  width="250" height="250" ></img></a>   
                <br></br>

        </div>
        <style jsx>{`
                h1,h2,ul{
                    font-family: 'Itim', cursive;
                }
                
            `}</style>

    </Layout>)
}

export default detail