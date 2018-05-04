import React from "react";
import ReactDOM from "react-dom";

import "./PropTypes/CustomPropTypes.js";

import { ClockWidget } from "./Widgets/ClockWidget.jsx";

ReactDOM.render(
        <div>
            <ClockWidget nameLabel="New York" timeZoneLabel="Eastern Time" />
            <ClockWidget nameLabel="Los Angeles" timeZoneLabel="Pacific Time"
                    timeZone="America/Los_Angeles"/>
        </div>
        , document.getElementById('app'));
