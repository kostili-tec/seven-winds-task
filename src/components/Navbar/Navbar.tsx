import Box from '@mui/material/Box';
import NavbarLabel from './NavbarLabel/NavbarLabel';
import NavbarItems from './NavbarItems/NavbarItems';

export default function Navbar() {
  return (
    <Box width={240}>
      <NavbarLabel />
      <NavbarItems />
    </Box>
  );
}
