import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../http';

const Oauth = () => {
    const [me, setMe] = useState(null);

    useEffect(() => {
        async function handleOauthLogin() {
            // try {
            //     const timestamp = Date.now();
            //     window.open(`${process.env.REACT_APP_API_URL}/api/auth/google?timestamp=${timestamp}`, "_self");
            // } catch (err) {
            //     console.log(err);
            // }

            try {
                const dataObj = await axios.get(`${process.env.REACT_APP_API_URL}/auth/me`, {
                    withCredentials: true
                });

                console.log(dataObj);
                setMe(dataObj);
            } catch (err) {
                console.log(err);
            }


        }

        handleOauthLogin();


    }, []);

    if (me) {
        console.log(JSON.stringify(me));
    }

    async function handleLogout() {
        // try {
        //     // const { data } = await logout();
        //     // console.log(data);
        //     document.cookie = 'connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        //     document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        //     document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        //     window.open(`${process.env.REACT_APP_API_URL}/api/auth/logout`, "_self");
        // } catch (err) {
        //     console.log(err);
        // }

        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/auth/logout`, {
                withCredentials: true
            });
            console.log(data);
            // document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            // document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            {/* <Link to={`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fgoogle&client_id=928344648652-v6605mnkeg9dgnuruglvcbq58mirdar0.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email?signup=true`}><button className=''>Signup with google</button></Link> */}
            <Link to={`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fgoogle&client_id=928344648652-v6605mnkeg9dgnuruglvcbq58mirdar0.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email`}><button className=''>Signin with google</button></Link>
            <button className='' onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Oauth;