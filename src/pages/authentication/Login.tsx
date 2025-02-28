/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { useLoginMutation } from "@/redux/features/user/userApi";
import { useAppDispatch } from "@/redux/hooks";
import { useLocation, useNavigate } from "react-router";
import { tokenDecoded } from "@/utils/tokenDecoded";
import { setUser } from "@/redux/features/user/userSlice";

interface FormInputs {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<FormInputs>();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const navigate = useNavigate();
  const path = location?.state?.from || "/";
  const onSubmit = async (data: FormInputs) => {
    try {
      const result = await login(data).unwrap();
      if (result?.success) {
        const user = tokenDecoded(result?.data);
        dispatch(setUser({ user, token: result?.data }));
        toast.success(result?.message);
        navigate(path);
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-orange-500 to-amber-500 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md space-y-8 p-6 sm:p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
        <div className="text-center">
          <div className="w-16 h-16 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-orange-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Account Login
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="sm:space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white text-sm sm:text-base">
              Username or Email address
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: true })}
              className="bg-white/20 border-0 text-white placeholder:text-white/70 text-sm sm:text-base p-3"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-white text-sm sm:text-base"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              {...register("password", { required: true })}
              className="bg-white/20 border-0 text-white placeholder:text-white/70 text-sm sm:text-base p-3"
              placeholder="Enter your password"
            />
          </div>

          <Button
            disabled={isLoading}
            type="submit"
            className="w-full bg-white text-orange-600 hover:bg-white/90 text-sm sm:text-base py-3 mt-3"
          >
            Login
          </Button>
        </form>

        <p className="text-center text-white text-sm sm:text-base">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
