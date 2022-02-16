/* eslint-disable react/no-unescaped-entities */
import React, {useState} from 'react';
import Router from 'next/router';
import Image from 'next/image';
// import cookie from 'js-cookie';
import styles from '../styles/Login.module.css'

const Login = () => {

  return (
    <section className={styles.login}>
		<div className={styles.login_box}>
			<div className={styles.left}>
				<div className={styles.top_link}><a href="#">
          <Image className={styles.image} src="/vercel.svg" alt="Vercel Logo" width={100} height={16} />Return home</a></div>
				<div className={styles.contact}>
					<form >
						<h3>SIGN IN</h3>
						<input type="text" placeholder="USERNAME" />
						<input type="text" placeholder="PASSWORD" />
						<button className={styles.submit}>LET'S GO</button>
					</form>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.rightText}>
					<h2>LONYX</h2>
					<h5>A UX BASED CREATIVE AGENCEY</h5>
				</div>
				<div className={styles.rightInductor}><Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /></div>
			</div>
		</div>
	</section>
  );
};

export default Login;