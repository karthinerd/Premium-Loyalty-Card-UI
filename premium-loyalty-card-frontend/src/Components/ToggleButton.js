import { Switch } from '@mui/material';

const ButtonToggle = (props)=> {
  const { checked, onChange } = props;

  return (
    <Switch
      checked={checked}
      onChange={onChange}
      inputProps={{ 'aria-label': 'Toggle button' }}
    />
  );
}

export default ButtonToggle;