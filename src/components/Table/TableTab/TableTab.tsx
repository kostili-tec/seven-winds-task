import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function TableTab() {
  return (
    <Grid container height={44} border='1px solid' borderColor='#414144'>
      <Grid item paddingX='15px' borderRight='1px solid' borderColor='#414144'>
        <Typography variant='body1' fontSize='18px' lineHeight='44px'>
          Строительно-монтажные работы
        </Typography>
      </Grid>
    </Grid>
  );
}
