import React, {useState} from 'react';
import s from './Sign.module.scss';

interface SignUpProps {
    username: string;
    mail: string;
    password: string;
    password2: string;
    setUsername: (text: string) => void;
    setMail: (text: string) => void;
    setPassword: (text: string) => void;
    setPassword2: (text: string) => void;
}

let SignUp: React.FC<SignUpProps> = (props) => {
    return (
        <>
            <div className={s.input__container}>
                <input type="text" className={s.input} placeholder="username" value={props.username} style={{marginTop: 30}} onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => props.setUsername(e.target.value)}
                    />
            </div>
            <div className={s.input__container}>
                <input type="mail" className={s.input} placeholder="mail" value={props.mail} onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => props.setMail(e.target.value)}
                />
            </div>
            <div className={s.input__container}>
                <input type="password" className={s.input} placeholder="password" value={props.password} onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => props.setPassword(e.target.value)}
                />
            </div>
            <div className={s.input__container}>
                <input type="password" className={s.input} placeholder="confirm password" value={props.password2} onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => props.setPassword2(e.target.value)}
                />
            </div>
            <div className={s.input__container}>
                <div className={s.button}>
                    Зарегистрироваться
                </div>
            </div>
        </>
    )
}

let Sign: React.FC = () => {
    let [activePage, setActivePage] = useState<number>(1);
    let [username, setUsername] = useState<string>("");
    let [mail, setMail] = useState<string>("");
    let [password, setPassword] = useState<string>("");
    let [password2, setPassword2] = useState<string>("");
    return (
        <div className={s.wrapper}>
            <div className={s.sign__container}>
                <div className={s.company__name}>DepConf</div> 
                <div className={s.company__title}>Faster, easier, for most </div>
                {activePage == 1 && <SignUp
                                        username = {username}
                                        setUsername = {setUsername}
                                        mail = {mail}
                                        setMail = {setMail}
                                        password = {password}
                                        setPassword = {setPassword}
                                        password2 = {password2}
                                        setPassword2 = {setPassword2}
                                    />}
            </div>
        </div>
    );
}

export {Sign};