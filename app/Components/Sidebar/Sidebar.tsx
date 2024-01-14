"use client"

import React from "react";
import {useGlobalState} from "@/app/Context/globalProvider";

export default function Sidebar() {
    const context = useGlobalState();
    return <nav className=''>Sidebar</nav>
}