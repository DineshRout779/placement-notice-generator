import React from "react";
import { useApp } from "../../context/AppContext";
import {
  Box,
  Button,
  Container,
  CopyButton,
  Tabs,
  Title,
  Tooltip,
} from "@mantine/core";
function Preview() {
  const { state: values } = useApp();
  console.log(values);

  return (
    <div>
      <Box
        sx={{
          margin: "1em 0",
          border: "1px solid #ced4da",
          minHeight: "500px",
          borderRadius: "4px",
          padding: "8px",
        }}
      >
        {/* notice id */}
        <p>
          <b>#{values.notice_id}</b>
        </p>
        {/* company name */}
        {values.company_name && (
          <p>
            <b>#{values.company_name}</b>
          </p>
        )}
        {/* about company */}
        {values.about_company && (
          <p>
            <b>About Company: </b> <br />
            {values.about_company}
          </p>
        )}
        {values.job_role && (
          <p>
            <b>Job Role: </b>
            {values.job_role}
          </p>
        )}
        {values.ctc && (
          <p>
            <b>CTC: </b>
            {values.ctc} LPA
          </p>
        )}

        {(values.degree_allowed ||
          values.branches_allowed ||
          values.max_backlog ||
          values.tenth_perc ||
          values.twelfth_perc ||
          values.diploma_perc ||
          values.ug_perc ||
          values.pg_perc) && (
          <p>
            <b>Eligibility Criteria</b>
          </p>
        )}

        {values.degree_allowed.length > 0 && (
          <p>
            - Degree:
            {values.degree_allowed.toString()}
          </p>
        )}
        {values.branches_allowed.length > 0 && (
          <p>
            - Branch:
            {values.branches_allowed}
          </p>
        )}

        {values.max_backlog && (
          <p>
            - Maximum Backlog:
            {values.max_backlog}
          </p>
        )}

        {values.tenth_perc && (
          <p>
            - Min 10th %:
            {values.tenth_perc}%
          </p>
        )}

        {values.twelfth_perc && (
          <p>
            - Min 12th %:
            {values.twelfth_perc}%
          </p>
        )}

        {values.diploma_perc && (
          <p>
            - Min diploma %:
            {values.diploma_perc}%
          </p>
        )}

        {values.ug_perc && (
          <p>
            - Min UG %:
            {values.ug_perc}%
          </p>
        )}

        {values.pg_perc && (
          <p>
            - Min PG %:
            {values.pg_perc}%
          </p>
        )}

        {values.form_link && (
          <p>
            All the eligible and interested candidates are required to fill the
            form by : <b>{values.form_link}</b>
          </p>
        )}
      </Box>
    </div>
  );
}

export default Preview;