import { getXataClient } from "@/xata";
import React from "react";

export default async function DashboardPage() {
    const xataClient = getXataClient();
    const tasks = await xataClient.db.task.getMany();
    return <div>
        <h1>Dashboard page</h1>
        <div>
            {tasks.map((task) =>(
                <p key={task.id}>{task.name}</p>
            ))}
        </div>
        </div>
}