"use client";

import { authClient } from "@/lib/authClient";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  return (
    <div className="flex min-h-[72vh] items-center justify-center py-12">
      <div className="bg-base-100 w-full max-w-md space-y-8 rounded-xl p-8 shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold">{isLogin ? "Sign in" : "Create account"}</h2>
          <p className="text-base-content/70 mt-2 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button onClick={() => setIsLogin(!isLogin)} className="text-primary ml-2 hover:underline">
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>

        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const rememberMe = formData.get("remember-me") as string;

    await authClient.signIn.email(
      {
        email,
        password,
        rememberMe: !!rememberMe,
        callbackURL: "/dashboard",
      },
      {
        onRequest: (ctx) => {
          setIsLoading(true);
          setError("");
        },
        onSuccess: (ctx) => {
          setIsLoading(false);
          router.push("/dashboard");
        },
        onError: (ctx) => {
          setIsLoading(false);
          setError(ctx.error.message);
        },
      },
    );
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      {error && <div className="alert alert-error">{error}</div>}

      <div className="space-y-4 rounded-md">
        <div>
          <label htmlFor="login-email" className="sr-only">
            Email address
          </label>
          <input id="login-email" name="email" type="email" required className="input input-bordered w-full" placeholder="Email address" />
        </div>
        <div>
          <label htmlFor="login-password" className="sr-only">
            Password
          </label>
          <input id="login-password" name="password" type="password" required className="input input-bordered w-full" placeholder="Password" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="checkbox checkbox-primary" />
          <label htmlFor="remember-me" className="ml-2 block text-sm">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="text-primary hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
          {isLoading ? <span className="loading loading-spinner"></span> : "Sign in"}
        </button>
      </div>
    </form>
  );
}

function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    await authClient.signUp.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name

        callbackURL: "/dashboard", // a url to redirect to after the user verifies their email (optional)
      },
      {
        onRequest: (ctx) => {
          setIsLoading(true);
          setError("");
        },
        onSuccess: (ctx) => {
          setIsLoading(false);
          router.push("/dashboard");
        },
        onError: (ctx) => {
          setIsLoading(false);
          setError(ctx.error.message);
        },
      },
    );
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      {error && <div className="alert alert-error">{error}</div>}

      <div className="space-y-4 rounded-md">
        <div>
          <label htmlFor="signup-name" className="sr-only">
            Full name
          </label>
          <input id="signup-name" name="name" type="text" required className="input input-bordered w-full" placeholder="Full name" />
        </div>
        <div>
          <label htmlFor="signup-email" className="sr-only">
            Email address
          </label>
          <input id="signup-email" name="email" type="email" required className="input input-bordered w-full" placeholder="Email address" />
        </div>
        <div>
          <label htmlFor="signup-password" className="sr-only">
            Password
          </label>
          <input
            id="signup-password"
            name="password"
            type="password"
            required
            className="input input-bordered w-full"
            placeholder="Password (min 8 characters)"
            minLength={8}
          />
        </div>
      </div>

      <div>
        <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
          {isLoading ? <span className="loading loading-spinner"></span> : "Create account"}
        </button>
      </div>
    </form>
  );
}
