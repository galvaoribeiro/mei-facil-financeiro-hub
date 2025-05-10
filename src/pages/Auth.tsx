
import { useState } from "react";
import { LoginForm } from "@/components/auth/LoginForm";
import { SignupForm } from "@/components/auth/SignupForm";

const Auth = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  const switchToSignup = () => {
    setMode("signup");
  };

  const switchToLogin = () => {
    setMode("login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold text-primary">
          MEI Simplificado
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {mode === "login" ? "Acesse sua conta" : "Crie sua conta"}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {mode === "login" ? (
            <LoginForm switchToSignup={switchToSignup} />
          ) : (
            <SignupForm switchToLogin={switchToLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
