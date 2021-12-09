import React from 'react'
import styles from './Header.module.css'
import {Image} from 'cloudinary-react'


export default function Header() {

    return (
            <div>
                <div className={styles.Headercontainer}>
                <Image href='/' className={styles.image} cloudName="dczwvybll" publicId="https://res.cloudinary.com/dczwvybll/image/upload/v1639051046/uploadPreset2021/olivertwistLogo1_d645nb.jpg"/>
                </div>
            </div>
    )
}
