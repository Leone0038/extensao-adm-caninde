import LoginForm from "@/components/LoginForm";
import Title from "@/components/Title";

export default function LoginPage() {
    return (
        <main className="flex-1 max-w-2xl p-4">
            <div>
                <Title text="Login" styles="mb-10 w-fit" />
                <LoginForm />
            </div>
        </main>
    );
}
