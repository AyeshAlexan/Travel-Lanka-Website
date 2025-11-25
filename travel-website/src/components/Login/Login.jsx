import React from 'react';
import Styles from '../styles/login.css';
import LoginLeft from '../components/Login/LoginLeft';
import LoginRight from '../components/Login/LoginRight';
import { motion } from 'framer-motion';

const Login = () => {
    return(
        <motion.div
        className="lofin-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 0.6}}
        >
        <div className='login-container'>
            <LoginLeft />
            <LoginRight />
        </div>
        </motion.div>
    );
};
export default Login;


        
    