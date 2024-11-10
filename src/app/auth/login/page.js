'use client'

import { LoginButton, SignupButton } from "@/app/components/Buttons";
import { BaseP, LittleP, PageTitle } from "@/app/components/Text";
import { host, serverHost } from "@/app/components/host";
import InputField from "@/app/components/inputField";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function LogInForm() {
    const [err, setErr] = useState(null);
    const searchParams = useSearchParams();

    try {
        if (searchParams.get('userId')) window.location.replace(`http://${host}/`);
        else throw searchParams.get('userId');
    } catch (e) {
        console.log(e);
    }
    

    async function sendFormData() {
        let formData = new FormData(document.getElementById('login'));

        try {
            let res = await fetch(`http://${serverHost}/login`,
            {
                method: 'POST',
                body: formData
            });
            if (res.status == 200) {
                setErr(null);
                window.location.replace(`http://${host}/auth`);
                console.log(res.json());
            } else throw toString(res.status);
        } catch (e) {
            setErr('Request error');
            console.log(e);
        }
    }

    return (
        <form className="p-5 flex flex-col gap-y-base tablet:gap-y-tab-base w-full rounded-base shadow-drop bg-white" id="login" onSubmit={(e) => {
            e.preventDefault();
            sendFormData();
        }}>
            <PageTitle>Вход</PageTitle>
            <BaseP text={'в приложение'}/>
            {err && <BaseP text={'Неверный логин или пароль'} className="text-red"/>}
            <InputField name="email" placeholder="Почта" type="email" />
            <InputField name="password" placeholder="Пароль" type="password" />
            <LoginButton isLogin={true}/>
            <SignupButton isLogin={true}/>
            <LittleP text={'Забыли пароль?'} className="text-center w-full"/>
        </form>
    )
}