import React from 'react';

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div class="aspect-w-3 aspect-h-4 bg-gray-800"></div>
                <div class="aspect-w-4 aspect-h-3 bg-gray-600"></div>
                <div class="aspect-w-3 aspect-h-4 bg-gray-300"></div>
                <div class="aspect-w-2 aspect-h-3 bg-gray-400"></div>
                <div class="aspect-w-3 aspect-h-4 bg-gray-800"></div>
                <div class="aspect-w-4 aspect-h-3 bg-gray-600"></div>
                <div class="aspect-w-3 aspect-h-4 bg-gray-300"></div>
                <div class="aspect-w-2 aspect-h-3 bg-gray-400"></div>
            </div>
        </div>
    );
}
