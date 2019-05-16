import React from "react";


interface CommonSearchFieldProps {
    value: string;
    onChange: (value: string) => void;
}

export default function CommonSearchField({ value, onChange }: CommonSearchFieldProps) {
    return (
        <input
            type="text"
            className="recipes__search"
            placeholder="Search"
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    );
}