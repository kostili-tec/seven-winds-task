import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function NavbarLabel() {
  return (
    <Grid
      container
      flexDirection='row'
      alignItems='center'
      justifyContent='space-between'
      border='1px solid'
      borderColor='#414144'
      maxWidth={240}
      height={44}
      // padding='9px 7px 8px 20px'
      paddingLeft='20px'
    >
      <Grid item>
        <Typography fontSize='14px'>Название проекта</Typography>
        <Typography fontSize='10px'>Аббревиатура</Typography>
      </Grid>
      <Grid item>
        <KeyboardArrowDownIcon />
      </Grid>
    </Grid>
  );
}
