import Link from "next/link";
import { UserPlus } from "lucide-react";

import GHSignin from "../_components/gh-signin";
import { RegisterForm } from "./_components/register-form";

export default function RegisterPage() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col justify-center space-y-8">

      {/* Branding */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold tracking-tight text-[#07c160]">
          FlyTripVisa
        </h2>

        <div className="flex size-10 items-center justify-center rounded-xl bg-[#07c160]/10 text-[#07c160]">
          <UserPlus className="size-5" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">
            Create an account
          </h1>

          <p className="text-sm leading-6 text-muted-foreground">
            Enter your email below to create your FlyTripVisa account.
          </p>
        </div>
      </div>

      {/* Registration Form */}
      <RegisterForm />

      {/* Divider */}
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-3 text-muted-foreground">
          Or continue with
        </span>
      </div>

      {/* GitHub Sign In */}
      <GHSignin />

      {/* Login */}
      <div className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="font-medium text-[#07c160] underline-offset-4 hover:underline"
        >
          Login
        </Link>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        FlyTripVisa · Secure Account Registration
      </p>
    </div>
  );
}