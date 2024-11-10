'use client'

import { BaseP, PageTitle } from "@/app/components/Text";
import InputField from "@/app/components/inputField";
import { LoginButton, SignupButton } from "@/app/components/Buttons";
import { useState } from "react";
import { serverHost } from "@/app/components/host";



export default function SignUpForm() {
    const [err, setErr] = useState(null);

    function check() {
        let formData = new FormData(document.getElementById('signup'))
        formData = Object.fromEntries(formData);
        if (formData.password != formData.repassword) {
            setErr('norepass');
            return false;
        } else {
            setErr(null);
            return true;
        }
    }

    async function sendFormData() {
        let formData = new FormData(document.getElementById('signup'));

        try {
            let res = await fetch(`http://${serverHost}/signup`, {
                method: 'POST',
                body: formData
            });
            if (res.status == 200) {
                setErr(null);
                window.location.replace(`http://${host}/auth`);
                console.log(res.json());
            } else throw 'signup error';
        } catch(e) {
            setErr('signup error');
            console.log(e);
        }  

    }

    return (
        <form className="p-5 flex flex-col gap-y-base tablet:gap-y-tab-base w-full rounded-base shadow-drop bg-white" id="signup" onSubmit={(e) => {
            e.preventDefault();
            if (check()) sendFormData();
        }}>
            <PageTitle>Регистрация</PageTitle>
            <BaseP text={'в системе'}/>
            {err == 'signup error' && <BaseP text={'Ошибка регистрации'} className="text-red" />}
            <InputField name="email" placeholder="Почта" type="email" />
            <InputField name="password" placeholder="Пароль" type="password" />
            {err == 'norepass' && <BaseP text={'Пароли не совпадают'} className="text-red"/>}
            <InputField name="repassword" placeholder="Повторите пароль" type="password" />
            <LoginButton isLogin={false}/>
            <SignupButton isLogin={false}/>
        </form>
    )
}