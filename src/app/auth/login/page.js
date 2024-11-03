'use client'

import { LoginButton, SignupButton } from "@/app/components/Buttons";
import { BaseP, LittleP, PageTitle } from "@/app/components/Text";
import InputField from "@/app/components/inputField";

export default function LogInForm() {
    function sendFormData() {
        let formData = new FormData(document.getElementById('login'))
        formData = Object.fromEntries(formData);
        console.log(formData);
    }

    return (
        <form className="p-5 flex flex-col gap-y-2.5 w-full rounded-base shadow-drop bg-white" id="login" onSubmit={(e) => {
            e.preventDefault();
            sendFormData();
        }}>
            <PageTitle>Вход</PageTitle>
            <BaseP text={'в приложение'}/>
            <InputField name="email" placeholder="Почта" type="email" />
            <InputField name="password" placeholder="Пароль" type="password" />
            <LoginButton />
            <SignupButton />
            <LittleP text={'Забыли пароль?'} className="text-center w-full"/>
        </form>
    )
}