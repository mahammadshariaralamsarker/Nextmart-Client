'use client'
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import React from "react";
import { useForm } from "react-hook-form";



const RegisterForm = () => {
  const form = useForm();
  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({field}) => (
              <FormItem>
                 <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""} />
                </FormControl>
                <FormDescription />
              </FormItem>
            )}
          />
          <Button type="submit">Register</Button>
        </form>

      </Form>
    </div>
  );
};

export default RegisterForm;
