/* eslint-disable react/no-unescaped-entities */
import React, {useState} from 'react';
import Router from 'next/router';
import Image from 'next/image';
// import cookie from 'js-cookie';
import styles from '../styles/Login.module.css'

const Login = () => {
	const url = '';

  return (
		<>
    <section className={styles.login}>
		<div className={styles.login_box}>
			<div className={styles.left}>
				<div className={styles.top_link}>
					<a href="#">
						<Image 
						className={styles.image} 
						src="/vercel.svg" alt="Vercel Logo" 
						width={100} height={16} />
						No tienes usuario, registrate
					</a>
				</div>
				<div className={styles.contact}>
					<form >
						<h3>Conéctate aquí</h3>
						<input type="text" placeholder="Usuario" />
						<input type="password" placeholder="Contraseña" />
						<button className={styles.submit}>Inicia sesión</button>
					</form>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.rightText}>
					<h2>El software para los restaurantes de hoy.</h2>
					<h5>Tu restaurante está listo para llegar más alto.</h5>
				</div>
				<div className={styles.rightInductor}><Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /></div>
			</div>
		</div>
	</section>
	</>
  );
};

export default Login;