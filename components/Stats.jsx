"use client";

import { useState, useEffect } from "react";

const Stats = ({ icon, title, value}) => {


    return (
        <>
            <div className="flex justify-between items-center p-4 bg-gray-500 rounded-md shadow-sm border-l-4">
                {/* Icon */}
                <div>

                </div>
                {/* Content */}
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="text-2xl font-bold text-gray-50">{value}</p>
                </div>
            </div>
        </>
    )
}

export default Stats;