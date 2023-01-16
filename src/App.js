import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Plugins from "./Plugins";

const kp_templates = {
  data: [
    {
      divisionDisplay: "Intro Division I",
      divisionId: "intro_1",
      blocks: [
        {
          comp: "KPMetaPrimary",
          props: {
            data: {
              key: "Type",
              valuePath: ["meta.kp_content_type"],
            },
            invert: true,
          },
        },
        {
          comp: "TitleInput",
          isRequired: true,
          valuePath: "main.title",
          props: {
            id: "main.title",
            readOnly: true,
            textAlign: "center",
            placeholder: " ",
            forceValue: true,
          },
        },
      ],
    },
    {
      divisionDisplay: "Intro Division II",
      divisionId: "intro_2",
      blocks: [
        {
          comp: "TplMetaBlock",
          displayOnly: true,
          props: {
            showSeparator: true,
            data: [
              {
                img: "kp_contributed_by.avatar",
                user: "kp_contributed_by.name",
              },
              {
                date: "kp_date_published",
              },
            ],
          },
        },
      ],
    },
    {
      divisionDisplay: "Head Division",
      divisionId: "head",
      blocks: [],
    },
    {
      divisionDisplay: "Body Division",
      divisionId: "body",
      blocks: [
        {
          comp: "LinkEmbedWithInput",
          isRequired: true,
          props: {
            label: "Link ",
            sublabel:
              "Paste a link to fetch the reports image, title etc. You can the edit it!",
            id: "main.link",
          },
          valuePath: "main.link",
          HELPER_enableSetValuePath: true,
          setValuePath: "main.title",
          setValuePathFn: "linkEmbedWithInputToRichText",
        },
        {
          comp: "PDFInput",
          props: {
            id: "main.pdfInput",
            label: "PDF",
            sublabel: "Add the pdf of the news report",
            buttonText: "Add pdf",
          },
          isRequired: false,
          valuePath: "main.pdfInput",
        },
        {
          comp: "RadioInputV2",
          isRequired: true,
          valuePath: "main.deathsReported",
          props: {
            id: "main.deathsReported",
            sublabel: "Does this news article mention violence or deaths ",
            label: "Deaths reported",
            options: [
              {
                value: "Yes",
                display: "Yes",
              },
              {
                value: "No",
                display: "No",
              },
            ],
            listType: "vertical",
          },
        },
        {
          comp: "KPTextInput",
          props: {
            placeholder: "Write here...",
            inputType: "number",
            label: "Number of deaths Reported",
            id: "main.deathNumber",
          },
          isRequired: true,
          valuePath: "main.deathNumber",
          displayConditions: [
            {
              valuePath: "main.deathsReported.value",
              operator: "SOME_EXACT",
              value: ["Yes"],
            },
          ],
        },
        {
          comp: "SummaryInput",
          isRequired: false,
          props: {
            sublabel: "A short description of the article ",
            label: "Summary",
            placeholder: "Write here...",
            id: "main.summary",
          },
          valuePath: "main.summaryInput",
        },
      ],
    },
    {
      divisionDisplay: "Tags Division",
      divisionId: "tags",
      blocks: [],
    },
  ],
};
export default function App() {
  return (
    // <Router>
    //   <Link to ="/plugins">plugins</Link> <br/>
    //   <Link to ="/custom1">custom1</Link>

    //    <Plugins />

    //   {/* <Switch>
    //     <Route exact path = "/plugins" component={Plugins}  />
    //   </Switch> */}
    // </Router>
    <div>App</div>
  );
}
