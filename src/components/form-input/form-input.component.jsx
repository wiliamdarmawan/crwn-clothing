import './form-input.styles.jsx'
import { Group, FormInputs, FormInputLabel } from './form-input.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
    <FormInputs {...otherProps} />
      {label && (
        // <label
        //   className={`${
        //     otherProps.value.length ? "shrink" : ""
        //   } form-input-label`}
        // >
        //   {label}
        // </label>
        <FormInputLabel>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
