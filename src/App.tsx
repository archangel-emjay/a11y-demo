import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BasicPage from './BasicPage';
import MaterialPage from './MaterialPage';

type NavOption = 'Basic'|'Material';
const navItems: NavOption[] = ['Basic', 'Material'];

export default function DrawerAppBar() {
  const [page, setPage] = useState<NavOption>('Basic');

  let inner;
  if (page === 'Basic') {
    inner = <BasicPage/>
  } else {
    inner = <MaterialPage/>;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {page}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} onClick={() => setPage(item)}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3, marginTop: 6 }}>
        {inner}
      </Box>
    </Box>
  );
}
