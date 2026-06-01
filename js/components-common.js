const Field = ({
  label,
  value,
  w = "md",
  lw = "md",
  highlight = false,
  link = false,
  onClick,
  tourId,
}) => (
  <div className="ffield" data-tour-id={tourId}>
    <span className={"flabel lw-" + lw}>{label}:</span>
    {link ? (
      <a className="sap-link" onClick={onClick}>
        {value}
      </a>
    ) : (
      <input
        className={"sap-input w-" + w + (highlight ? " highlighted" : "")}
        value={value}
        readOnly
      />
    )}
  </div>
);

const Select = ({ label, value, w = "md", lw = "md", tourId }) => (
  <div className="ffield" data-tour-id={tourId}>
    <span className={"flabel lw-" + lw}>{label}:</span>
    <div className={"sap-select w-" + w}>
      <span>{value}</span>
      <span className="chev">
        <Icon name="chevron-down" size={11} />
      </span>
    </div>
  </div>
);

const Radio = ({ checked, label }) => (
  <label className="sap-radio-row">
    <span className={"sap-radio" + (checked ? " checked" : "")}>
      {checked && <span className="dot" />}
    </span>
    {label}
  </label>
);

const Check = ({ checked, label }) => (
  <label className="checkbox-row">
    <span
      className="sap-checkbox"
      style={
        checked
          ? {
              background: "#00833e",
              borderColor: "#00833e",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }
          : {}
      }
    >
      {checked && <Icon name="check" size={10} color="white" />}
    </span>
    {label}
  </label>
);

