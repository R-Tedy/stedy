'use client'

import React from 'react'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Form, FormControl, FormDescription, FormLabel, FormField, FormItem, FormMessage } from './ui/form'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

function RequestForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }
  return (
    <>
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 font_regular" >
        <FormField
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="Category" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="typeOfService"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Service</FormLabel>
              <FormControl>
                <Input placeholder="Type of service" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="serviceDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Describe the Service</FormLabel>
              <FormControl>
                {/* <Input type='textarea' placeholder="Service Description" {...field} /> */}
                <Textarea placeholder='Service Description' {...field}/>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="contactDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Details</FormLabel>
              <FormControl>
                <Input placeholder="+254" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder="Email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className='bg-black'>Submit Request</Button>
      </form>
    </Form>
    </>
  )
}

export default RequestForm