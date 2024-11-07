'use client'

import { LoginButton, SignupButton } from "@/app/components/Buttons";
import { BaseP, LittleP, PageTitle } from "@/app/components/Text";
import { host, serverHost } from "@/app/components/host";
import InputField from "@/app/components/inputField";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";

export default function LogInForm() {
    const [err, setErr] = useState(null);

    console.log(err);

    async function sendFormData() {
        let formData = new FormData(document.getElementById('login'))
        let clearFormData = Object.fromEntries(formData);
        console.log(clearFormData);
        window.location.replace(`http://${host}/`);

        fetch(`http://${serverHost}/login`,
            {
                method: 'POST',
                body: formData
            })
        .then(res => res.json())
        .catch(err => setErr(err))
        .then(data => { 
            if (data.status == 200) {
                setErr(null);
                // localStorage.setItem('userId', toString(data.userId));
                window.location.replace(`http://${host}/`);
            }
            else setErr('Request error');
        })
    }

    return (
        <form className="p-5 flex flex-col gap-y-base tablet:gap-y-tab-base w-full rounded-base shadow-drop bg-white" id="login" onSubmit={(e) => {
            e.preventDefault();
            sendFormData();
        }}>
            <PageTitle>Вход</PageTitle>
            <BaseP text={'в приложение'}/>
            {err && <BaseP text={'Не верный логин или пароль'} className="text-red"/>}
            <InputField name="email" placeholder="Почта" type="email" />
            <InputField name="password" placeholder="Пароль" type="password" />
            <LoginButton isLogin={true}/>
            <SignupButton isLogin={true}/>
            <LittleP text={'Забыли пароль?'} className="text-center w-full"/>
        </form>
    )
}