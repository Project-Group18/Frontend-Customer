import React from 'react'
import styles from './Header.module.css'
import {Image} from 'cloudinary-react'


export default function Header(props) {

    const {countCartItems} = props;
    console.log("countCartItems")
    console.log(countCartItems)

    return (
            <div>
                <div className={styles.Headercontainer}>
                <Image href='/' className={styles.image} cloudName="dczwvybll" publicId="https://res.cloudinary.com/dczwvybll/image/upload/v1639051046/uploadPreset2021/olivertwistLogo1_d645nb.jpg"/>
                    <div className={styles.Account}>
                        <div>
                            {props.userLoggedIn ? 
                            <>
                                {/* If user is logged in, render these buttons */}
                                <button > <a href='/accountpage' > My account</a></button>
                                <button onClick={props.logout} ><a href='/'> Log out</a></button>
                          
                            </>
                            :
                            <>
                                {/* If user is not logged in, render these buttons */}
                                <button > <a href='/loginpage' > Log in</a></button>
                                <button > <a href='/registerpage' > Sign up</a></button>
                            </>
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}
