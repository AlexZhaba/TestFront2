import React, {useState, useRef, useEffect} from 'react';
import s from './Sign.module.scss';
import {NavLink} from 'react-router-dom';
interface SignUpProps {
    setActivePage: (num: number) => void;
}

let SignUp: React.FC<SignUpProps> = (props) => {
    let [activePage, setActivePage] = useState<number>(1);
    let [username, setUsername] = useState<string>("");
    let [mail, setMail] = useState<string>("");
    let [password, setPassword] = useState<string>("");
    let [password2, setPassword2] = useState<string>("");

    //refs
    let usernameRef = useRef<HTMLInputElement | null>(null);
    let mailRef = useRef<HTMLInputElement | null>(null);
    let passwordRef = useRef<HTMLInputElement | null>(null);
    let password2Ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        usernameRef.current?.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && usernameRef.current?.value !== "") {
                mailRef.current?.focus();
            }
        })
        mailRef.current?.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && mailRef.current?.value !== "") {
                passwordRef.current?.focus();
            }
        })
        passwordRef.current?.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && passwordRef.current?.value !== "") {
                password2Ref.current?.focus();
            }
        })
        password2Ref.current?.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && password2Ref.current?.value !== "") {
                alert('nice');
            }
        })
    }, []);
    return (
        <>
            <div className={s.input__container}>
                <input type="text" className={s.input} ref={usernameRef} placeholder="username" value={username} style={{marginTop: 30}} onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                    />
            </div>
            <div className={s.input__container}>
                <input type="mail" className={s.input} ref={mailRef} placeholder="mail" value={mail} onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => setMail(e.target.value)}
                />
            </div>
            <div className={s.input__container}>
                <input type="password" className={s.input} ref={passwordRef} placeholder="password" value={password} onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
            </div>
            <div className={s.input__container}>
                <input type="password" className={s.input} ref={password2Ref} placeholder="confirm password" value={password2} onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => setPassword2(e.target.value)}
                />
            </div>
            <div className={s.input__container}>
                <div className={s.button}>
                    Зарегистрироваться
                </div>
            </div>
            <div className={s.alreadyReg}>
                Already Registered? <span onClick={() => props.setActivePage(2)} className={s.signBottom}> Sign in</span>
            </div>
        </>
    )
}

interface SignInProps {
    setActivePage: (num: number) => void;
}

let SignIn: React.FunctionComponent<SignInProps> = (props) => {
    let [username, setUsername] = useState<string>("");
    let [password, setPassword] = useState<string>("");

    //refs
    let usernameRef = useRef<HTMLInputElement | null>(null);
    let passwordRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        usernameRef.current?.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && usernameRef.current?.value !== "") {
                passwordRef.current?.focus();
            }
        })
        passwordRef.current?.addEventListener("keydown", (event) => {
            if (event.key === "Enter" && passwordRef.current?.value !== "") {
                alert('nice');
            }
        })

    }, []);
    return (
        <>
            <div className={s.input__container}>
                <input type="text" className={s.input} ref={usernameRef} placeholder="username" value={username} style={{marginTop: 30}} onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                    />
            </div>
            <div className={s.input__container}>
                <input type="password" className={s.input} ref={passwordRef }placeholder="password" value={password} onChange={
                    (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
            </div>
            <div className={s.input__container}>
                <div className={s.button}>
                    Войти
                </div>
            </div>
            <div className={s.alreadyReg}>
                Not registered yet? <span onClick={() => props.setActivePage(1)} className={s.signBottom}> Sign up</span>
            </div>
        </>
    )
}

let Sign: React.FC = () => {
    let [activePage, setActivePage] = useState<number>(1);
    return (
        <div className={s.wrapper}>
            <div className={s.sign__container} style={activePage === 2 ? {height: 400} : {}}>
                <div className={s.company__name}>DepConf</div> 
                <div className={s.company__title}>Faster, easier, for most </div>
                {activePage == 1 && <SignUp
                                        setActivePage={setActivePage}
                                    />}
                {activePage == 2 && <SignIn
                                        setActivePage={setActivePage}
                                    />}

            </div>
        </div>
    );
}

export {Sign};