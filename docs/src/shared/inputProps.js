const inputProps = [
  {
    name: "id",
    type: "String",
    defaultValue: "Required",
    description: "A unique ID for this input"
  },
  {
    name: "name",
    type: "String",
    defaultValue: "undefined",
    description: "A unique name for this input"
  },
  {
    name: "value",
    type: "String",
    defaultValue: "undefined",
    description: "Value of input, used when controlling the component"
  },
  {
    name: "disabled",
    type: "Boolean",
    defaultValue: "false",
    description: "Marks the field as disabled and disallows user input"
  },
  {
    name: "errorMessage",
    type: "String",
    defaultValue: "null",
    description: "Displays list of error messages and applies red style"
  },
  {
    name: "errorList",
    type: "Array of Strings",
    defaultValue: "null",
    description: "Displays list of error messages and applies red style"
  },
  {
    name: "helpText",
    type: "String",
    defaultValue: "null",
    description:
      "Placed below the label to provide assistance on how to fill out a field or the expected format. It can also provide an explanation of why the information is needed and how it will be used."
  },
  {
    name: "labelText",
    type: "String",
    defaultValue: "null",
    description: "Informs users what the corresponding input field is for."
  },
  {
    name: "placeholder",
    type: "String",
    defaultValue: "null",
    description:
      "A hint to the expected format for the field. Not a replacement for a label."
  },
  {
    name: "required",
    type: "Boolean",
    defaultValue: "false",
    description: "Makes the field require selection before the form will submit"
  },
  {
    name: "requirementText",
    type: "String",
    defaultValue: "null",
    description: "(Optional) or (Required)"
  }
];

export default inputProps;
