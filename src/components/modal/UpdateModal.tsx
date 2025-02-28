/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ImSpinner11 } from "react-icons/im";

import MainForm from "../form/MainForm";
import MainInput from "../form/MainInput";
import MainSelect from "../form/MainSelect";
import MainTextarea from "../form/MainTextarea";
import { DialogClose } from "@radix-ui/react-dialog";
import { categories } from "@/pages/dashboard/sidebar/adminSidebar/schema";
import { IBike } from "@/types";

export function UpdateModal({
  isLoading,
  onSubmit,
  defaultValue,
}: {
  isLoading: boolean;
  onSubmit: any;
  defaultValue: Partial<IBike>;
}) {
  console.log(isLoading);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" rounded-full cursor-pointer text-blue-600 text-xs border-0 hover:bg-blue-100 bg-blue-50 px-2 py-1.5">
          Update
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl [&>button]:hidden ">
        <DialogHeader>
          <DialogTitle>Update Bike</DialogTitle>
        </DialogHeader>

        <MainForm defaultValues={defaultValue} onSubmit={onSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center ">
            <MainInput label="Brand" name="brand" />
            <MainInput label="Name" name="name" />
          </div>
          <div className="grid grid-cols-1 my-3 lg:grid-cols-2 gap-3 items-center ">
            <MainInput type="number" label="Price" name="price" />
            <MainInput type="number" label="Year" name="year" />
          </div>
          <div className="grid grid-cols-1 mb-3 lg:grid-cols-1 gap-3 items-center ">
            {/* <MainInput label="Brand" name="brand" /> */}
            <MainSelect label="Category" name="category" options={categories} />
          </div>
          <div className=" mb-3  ">
            <MainTextarea name="description" label="Description" />
          </div>
          <div className="flex justify-end mt-5">
            <DialogFooter>
              <Button type="submit">
                Update Bike{" "}
                {isLoading && (
                  <ImSpinner11
                    className="my-auto ml-1 animate-spin"
                    size={18}
                  />
                )}
              </Button>
              <DialogClose asChild>
                <Button
                  type="button"
                  className="bg-slate-200 text-black"
                  variant="secondary"
                >
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </MainForm>
      </DialogContent>
    </Dialog>
  );
}
