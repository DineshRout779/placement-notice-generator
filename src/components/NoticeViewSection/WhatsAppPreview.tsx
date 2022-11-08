import { useApp } from "../../context/AppContext";
import { Box, Button, CopyButton, ScrollArea } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import dayjs from "dayjs";

function WhatsAppPreview() {
  const { state: values } = useApp();

  function convertToPlain(html: any) {
    var tempDivElement = document.createElement("div");
    tempDivElement.innerHTML = html;
    return tempDivElement.textContent || tempDivElement.innerText || "";
  }

  let htmlString = `<div>*#${values.notice_id}*\n*#${
    values.company_name
  }*\n\n*About Company:*\n${values.about_company}\n*Website:* ${
    values.company_website
  }\n\n*Job Role:* ${values.job_role}\n*CTC:* ${
    values.ctc
  } LPA\n\n*Bond Period (in years):* ${
    values.bond_period
  }\n\n*Eligibility Criteria*\n- Degree: ${values.degree_allowed.toString()}\n- Branch:${values.branches_allowed.toString()}\n- Maximum Backlog: ${
    values.max_backlog
  }\n- Min 10th %: ${values.tenth_perc}%\n- Min 12th %: ${
    values.twelfth_perc
  }%\n- Min diploma %:${values.diploma_perc}%\n- Min UG %: ${
    values.ug_perc
  }%\n- Min PG %: ${values.pg_perc}%\n- Min Gap Year: ${
    values.min_gap
  } year\n\nAll the eligible and interested candidates are required to fill the form by *${dayjs(values?.form_submission_time).format("hh:mm A")}* on *${dayjs(values?.form_submission_date).format("DD MMMM YYYY")}*\n\n*Apply Link*: ${
    values.form_link
  }\n\n*NB:*\n${values.extra_note}\n</div>`;

  const copyCLickHandler = () => {
    navigator.clipboard.writeText(convertToPlain(htmlString));
    showNotification({
      message: "Text for WhatsApp is copied! 😊",
      autoClose: 1500,
      color: "green",
    });
  };

  return (
    <Box>
      <ScrollArea
        style={{ height: "60vh" }}
        sx={{
          margin: "1em 0",
          border: "1px solid #ced4da",
          borderRadius: "4px",
          padding: "1em",
        }}
      >
        {/* these should be according to whatsapp formatting */}
        {/* notice id */}
        <p>
          {values.notice_id && (
            <span>
              <b>*#{values.notice_id}*</b> <br />
            </span>
          )}
          {/* company name */}
          {values.company_name && <b>*#{values.company_name}*</b>}
        </p>
        {/* about company */}
        {values.about_company && (
          <p>
            <b>*About Company:*</b> <br />
            {values.about_company}
          </p>
        )}
        {/* company website */}
        {values.company_website && (
          <p>
            <b>*Website:*</b> {values.company_website}
          </p>
        )}
        {values.job_role && (
          <p>
            <b>*Job Role:*</b>
            {values.job_role}
          </p>
        )}
        {values.ctc && (
          <p>
            <b>*CTC:*</b>
            {values.ctc} LPA
          </p>
        )}
        {values.bond && (
          <p>
            <b>*Bond Period (in years):*</b>&nbsp;
            {values.bond_period}
          </p>
        )}

        <p>
          {(values.degree_allowed.length ||
            values.branches_allowed.length ||
            values.max_backlog ||
            values.tenth_perc ||
            values.twelfth_perc ||
            values.diploma_perc ||
            values.ug_perc ||
            values.pg_perc) && (
            <span>
              <b>*Eligibility Criteria*</b>
              <br />
            </span>
          )}

          {values.degree_allowed.length > 0 && (
            <span>
              - Degree:&nbsp;
              {values.degree_allowed.toString()}
              <br />
            </span>
          )}

          {values.branches_allowed.length > 0 && (
            <span>
              - Branch:&nbsp;
              {values.branches_allowed.toString()} <br />
            </span>
          )}

          {values.max_backlog && (
            <span>
              - Maximum Backlog:&nbsp;
              {values.max_backlog}
              <br />
            </span>
          )}

          {values.tenth_perc && (
            <span>
              - Min 10th %:&nbsp;
              {values.tenth_perc}% <br />
            </span>
          )}

          {values.twelfth_perc && (
            <span>
              - Min 12th %:&nbsp;
              {values.twelfth_perc}%<br />
            </span>
          )}

          {values.diploma_perc && (
            <span>
              - Min diploma %:&nbsp;
              {values.diploma_perc}% <br />
            </span>
          )}

          {values.ug_perc && (
            <span>
              - Min UG %:&nbsp;
              {values.ug_perc}%<br />
            </span>
          )}

          {values.pg_perc && (
            <span>
              - Min PG %:&nbsp;
              {values.pg_perc}%<br />
            </span>
          )}

          {values.min_gap && (
            <span>
              - Min Gap Year:&nbsp;
              {values.min_gap} year
              <br />
            </span>
          )}
        </p>

        {(values.form_link || values.form_submission_date) && (
          <p>
            All the eligible and interested candidates are required to fill the
            form by{" "}
            <b>
              {dayjs(values?.form_submission_time).format("hh:mm A")}
            </b>
            {" "}on{" "}
            <b>
              {dayjs(values?.form_submission_date).format("DD MMMM YYYY")}
            </b>
            .<br />
            Apply link: <b><a href={values.form_link}>{values.form_link}</a></b>
          </p>
        )}

        {values.extra_note && (
          <p>
            <b>*NB:*</b>
            <br />
            <span>{values.extra_note}</span>
          </p>
        )}
      </ScrollArea>
      <Button mb="sm" color="indigo" onClick={copyCLickHandler}>
        Copy
      </Button>
    </Box>
  );
}

export default WhatsAppPreview;
