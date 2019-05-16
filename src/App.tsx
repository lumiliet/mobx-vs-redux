import React from "react";
import MobXPanel from "./mobx/components/MobXPanel";
import ReduxPanel from "./redux/components/ReduxPanel";

export default function App() {
    return (
        <div className="horizontal-split">
            <div>
                <ReduxPanel />
            </div>
            <div>
                <MobXPanel />
            </div>
        </div>
    );
}
