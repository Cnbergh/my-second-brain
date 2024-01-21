"use client"

import React from "react";
import {useGlobalState} from "@/Context/globalProvider";

export default function Sidebar() {
    const {theme} = useGlobalState();
    return <aside style={{backgroundColor: theme.backgroundColor, color: theme.color}} className="">Sidebar</aside>
}