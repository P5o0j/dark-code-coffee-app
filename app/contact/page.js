"use client";

import { useRouter } from "next/navigation";
import Button from "../_components/Button";
import Input from "../_components/Input";

function Page() {
  const router = useRouter();
  return (
    <>
      <form className="md:w-[50%] mx-auto bg-black p-3 rounded-md">
        <fieldset className="border p-5 text-3xl rounded-md">
          {/* <h1>Contact Us</h1> */}
          <legend>Contact Us</legend>
          <Input label="Name:" id="name" type="name" name="name" required />
          <Input label="Email:" id="email" type="email" name="email" required />
          <Input
            label="Order number:"
            id="order"
            type="text"
            name="order"
            placeholder="optional"
          />

          <div className="my-4 flex content-start">
            <p className="w-[300]">
              <label htmlFor="message" className="text-3xl mr-10 ">
                Message:
              </label>
            </p>
            <p>
              <textarea
                id="message"
                className="w-[400] rounded-sm text-black"
                rows="4"
                cols="50"
              ></textarea>
            </p>
          </div>

          {/* BUTTONS */}
          <div className="w-full flex justify-end py-6">
            <Button type="reset">Reset</Button>
            <Button>Send</Button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default Page;
