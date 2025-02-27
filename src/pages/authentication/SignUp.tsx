/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegisterMutation } from "@/redux/features/user/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

interface FormInputs {
  name: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const { register, handleSubmit } = useForm<FormInputs>();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: FormInputs) => {
    try {
      const result = await registerUser(data).unwrap();
      if (result?.success) {
        toast.success(result?.message);
        navigate("/login");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="min-h-[90vh] bg-gradient-to-br from-red-500 via-orange-500 to-amber-500  flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md space-y-8 p-6 sm:p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Create an Account
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white text-sm sm:text-base">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              {...register("name", { required: true })}
              className="bg-white/20 border-0 text-white placeholder:text-white/70 text-sm sm:text-base p-3"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white text-sm sm:text-base">
              Email Address
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
            className="w-full bg-white text-indigo-600 hover:bg-white/90 text-sm sm:text-base py-3"
          >
            Sign Up
          </Button>
        </form>

        <p className="text-center text-white text-sm sm:text-base">
          Already have an account?{" "}
          <a href="/login" className="font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
