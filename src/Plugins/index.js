import React from "react";
import { Switch, Link, Route, useRouteMatch } from "react-router-dom";

import Components from "./Components";

const routeConfigs = [
  {
    path: "custom1",
    comp: "Custom1",
  },
  {
    path: "custom2",
    comp: "Custom2",
  },
];

export default function Plugins() {
  const match = useRouteMatch();
  console.log({ match });

  return routeConfigs.map((d) => (
    <Route exact path={`/${d.path}`} component={Components[d.comp]} />
  ));
}
