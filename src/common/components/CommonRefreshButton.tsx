import React from "react";

interface CommonRefreshButtonProps {
    isLoading: boolean;
    onClick: () => void;
}

export default function CommonRefreshButton({
    isLoading,
    onClick
}: CommonRefreshButtonProps) {
    if (isLoading) return <div className="spinning-loader" />;
    else {
        return (
            <button className="recipes__refresh" onClick={onClick}>
                Refresh
            </button>
        );
    }
}
