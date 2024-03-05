'use client';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { toast } from "@/components/ui/use-toast"
import { useForm } from 'react-hook-form';


  export function TaskForm({ handleCreateTask }) {
    const form = useForm({
      resolver: zodResolver(FormSchema),
    });
  

    async function onSubmit(data) {
    toast({
      title: "Task Created",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    const newTask = await xataClient.db.Task.create({
        name: newRecord.name,
        userId: newRecord.userId,
        estimatedTime: newRecord.estimatedTime // Pass på at dette er et tall
      });
      handleCreateTask(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {/* Task Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Name</FormLabel>
              <Input {...field} placeholder="Enter task name" />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Estimated Time Select Field */}
        <FormField
          control={form.control}
          name="estimatedTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated Time</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select estimated time" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {/* Legg til valgmuligheter her */}
                  <SelectItem value="5">5 min</SelectItem>
                  <SelectItem value="10">10 min</SelectItem>
                  <SelectItem value="15">15 min</SelectItem>
                  {/* ...flere valgmuligheter */}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}