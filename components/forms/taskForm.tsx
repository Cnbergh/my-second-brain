'use client';
import React, { useRef } from 'react';
import Container from '../ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function TaskForm({
  handleCreateTask,
}: {
  handleCreateTask: (formData: FormData) => void;
}) {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <Container>
      <section>
        <Card>
          <CardHeader>
            <CardTitle>New task</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="mb-4 flex gap-x-2 items-center"
              action={(formData) => {
                handleCreateTask(formData);
                ref.current?.reset();
              }}
              ref={ref}>
              <div className="flex grow w-full max-w-sm items-center space-x-2">
                <label
                  htmlFor="name"
                  className="text-sm mb-2 hidden"
                  aria-label="New Task">
                  New Task
                </label>
                <Input
                  name="name"
                  type="text"
                  id="name"
                  className="shadow appearance-none border-2 border-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                  placeholder="Create task"
                />
                <Button type='submit' className="py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32">
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </Container>
  );
}
