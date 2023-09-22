import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function TableHeader() {
  return (
    <Grid
      container
      spacing={0}
      height='42px'
      justifyContent='space-between'
      alignItems='center'
      paddingLeft='4px'
    >
      <Grid item xs={1} paddingLeft='12px'>
        <Typography color='secondary' variant='body2'>
          Уровень
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Typography color='secondary' variant='body2'>
          Наименование работ
        </Typography>
      </Grid>
      <Grid item xs={1.5}>
        <Typography color='secondary' variant='body2'>
          Основная з/п
        </Typography>
      </Grid>
      <Grid item xs={1.5}>
        <Typography color='secondary' variant='body2'>
          Оборудование
        </Typography>
      </Grid>
      <Grid item xs={1.5}>
        <Typography color='secondary' variant='body2'>
          Накладные расходы
        </Typography>
      </Grid>
      <Grid item xs={1.5}>
        <Typography color='secondary' variant='body2'>
          Сметная прибыль
        </Typography>
      </Grid>
    </Grid>
  );
}
