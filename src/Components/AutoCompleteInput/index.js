import { AutoComplete } from "antd";

function AutoCompleteInput({flatOptions}) {

  // THIS SHIT AINT WORKING!!!
  return (
    <AutoComplete
    style={{
        width: 200,
    }}
    options={flatOptions}
    placeholder="Bedok North Springs"
    filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
    />
  );
}

export default AutoCompleteInput;
