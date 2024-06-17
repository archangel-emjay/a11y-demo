import { TabPanel, TabContext, TabList } from '@mui/lab';
import { Box, Tab, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { SyntheticEvent, useState } from 'react';

export default function MaterialPage() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const onButtonClick = () => setOpen(!isOpen);
  const [tabId, setTabId] = useState<string>("Work");
  const onTabClick = (_: SyntheticEvent, id: string) => setTabId(id);
  return (<>
    <Button onClick={onButtonClick}>Click Me</Button>
    {isOpen && <TabContext value={tabId}>
      <Card>
        <Box>
          <TabList onChange={onTabClick}>
            <Tab label="Work" value='Work'/>
            <Tab label="Fun" value='Fun'/>
          </TabList>
          <TabPanel value='Work'>
            <Typography>It's a beautiful day to work</Typography>
          </TabPanel>
          <TabPanel value='Fun'>
            <Typography>Gaming all night on Balatro</Typography>
          </TabPanel>
        </Box>
      </Card>
    </TabContext>}
  </>);
};
