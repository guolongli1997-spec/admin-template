import Link from "next/link";
import { ShieldCheck } from "lucide-react";

import GHSignin from "../_components/gh-signin";
import { LoginForm } from "./_components/login-form";

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col justify-center space-y-8">

      {/* Header */}
      <div className="space-y-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-[#07c160]/10 text-[#07c160]">
          <ShieldCheck className="size-6" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">
            Welcome back
          </h1>

          <p className="text-sm leading-6 text-muted-foreground">
            Sign in to access your FlyTripVisa administration workspace.
          </p>
        </div>
      </div>

      {/* Login Form */}
      <LoginForm />

      {/* Divider */}
      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-3 text-muted-foreground">
          Or continue with
        </span>
      </div>

      {/* GitHub Authentication */}
      <GHSignin />

      {/* Registration */}
      <div className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/register"
          className="font-medium text-[#07c160] underline-offset-4 hover:underline"
        >
          Create account
        </Link>
      </div>

      {/* Security Notice */}
      <p className="text-center text-xs text-muted-foreground">
        Protected access · FlyTripVisa Admin Control Center
      </p>
    </div>
  );
}