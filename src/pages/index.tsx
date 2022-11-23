import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  {mapImageList, changeMemePicture, enablePhotoUpload,  downloadImg} from '../lib/script.js'
import { useState } from 'react'
export default function Home() {
  const [imageList] = useState(mapImageList())
  return (
    <div className={styles.container}>
      <Head>
        <title>MemeMania</title>
        <meta name="description" content="Crie seus memes divertas-e com resposabilidade!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.app}>
            <div className={styles.logo}>
                <img src="./pictures/MemeManiaLogo.png" alt="" width="150" />
             </div> 
             <div className={styles.appImage} id="downlabled">
                 <textarea name="textTop" className={styles.textBox} placeholder="Digite sua frase" aria-multiline="true" id="" ></textarea>
                 <div id="display-image" className={styles.displayImage}></div>
                 <textarea name="textBottom" className={styles.textBox} placeholder="Digite sua frase" aria-multiline="true" id="" ></textarea>
             </div>
             <div className={styles.ferramentas}>
            <div>
                <select  className={styles.memeslist} id="memes-list" onChange={(e) => changeMemePicture(e.target.value )}>
                <option value="../pictures/default.jpg">Selecione</option>
                {imageList.map(function(d){
                  return (
                    <option value={d.path}>{d.name}</option>
                  )
                  })}       
                </select>
             </div>    
             <div>
             <input type="file" className={styles.imageInput}  id="image-input" accept="image/jpeg, image/png, image/jpg" onChange={(e) => enablePhotoUpload()}/>
             </div>
             <div className={styles.download}>
                 <button className={styles.btnDownload} id="btn-download" onClick={(e) => downloadImg()}>Download</button>
             </div>
        </div>
     </div>
    </div>
  )
}
