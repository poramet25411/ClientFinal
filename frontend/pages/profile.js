import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

import Link from 'next/link'


const Profile1 = ({ token }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }
 
    return (
        <Layout>
            <Head>
                <title>เกี่ยวกับเรา</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <br></br>
                <br></br>
                <br></br>
                <h1>เกี่ยวกับเรา</h1>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>
                <br />
                <div>
                    <div className={styles.box} >
                    <br></br>  
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    สโมสรก่อตั้งใน ค.ศ. 1892 และได้เข้าร่วมแข่งขันฟุตบอลลีกในปีต่อมา ลิเวอร์พูลใช้สนามแอนฟีลด์ตั้งแต่ก่อตั้งสโมสร ช่วงเวลาที่ประสบความสำเร็จมากที่สุดในประวัติศาสตร์คือช่วงคริสต์ทศวรรษ 1970 ถึงคริสต์ทศวรรษ 1980<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;แอนฟีลด์ถูกสร้างขึ้นใน ค.ศ. 1884 บนที่ดินติดกับสแตนลีย์พาร์ก ห่างจากตัวเมืองลิเวอร์พูล 2 ไมล์ (3 กิโลเมตร)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; สโมสรฟุตบอลลิเวอร์พูล
                    ผู้อำนวยการ: จอห์น ดับเบิลยู. เฮนรี, ทอม เวอร์เนอร์, ไมเคิล กอร์ดอน, ปีเตอร์ มัวร์, ไมเคิล อีแกน
                    ไม่ใช่กรรมการบริหาร: สกอตแลนด์ เคนนี แดลกลีช[158]
                    ผู้อำนวยการฝ่ายสื่อสาร: สกอตแลนด์ ซูซาน แบล็ก[159]
                    ผู้อำนวยการฝ่ายแมวมอง: อังกฤษ เดฟ ฟอลโลวส์[160]
                    หัวหน้าฝ่ายแมวมอง: ไอร์แลนด์เหนือ แบร์รี ฮันเตอร์
                    ผู้อำนวยการฝ่ายเทคนิค: อังกฤษ ไมเคิล เอ็ดวอร์ดส <br></br>
                    <br></br>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet"></link>

                    
                    </div>
                    <br />
                    <br/><br/>
                   
                    <img  src="https://f.ptcdn.info/887/072/000/qq58n411a8n0SdyJ3v7g-o.jpg"  alt="Trulli" width="1000" height="500"></img> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br></br>
                    <br></br>              
                    </div>
                  <style jsx>{`
                h1,h2,ul{
                    font-family: 'Itim', cursive;
                }
                
            `}</style>
    <div>
                </div>
            </div>
        </Layout>
    )
}

export default withAuth(Profile1)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
