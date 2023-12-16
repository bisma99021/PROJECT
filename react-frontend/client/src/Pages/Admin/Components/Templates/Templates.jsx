import Card from 'react-bootstrap/Card';
import './Template.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

function Templates() {
  return (
    <div className="conatiner">
      <div className="templates">
        <div className="row">
          <div className="t-card">
          <Card className="templateCard" >
            <Card.Body><br></br>
              <Card.Title style={{marginTop: '12rem'}}><b>School Template</b></Card.Title>
              <Stack spacing={2} direction="row" style={{marginLeft:'1rem',marginTop:'0.5rem'}}>
                <Button variant="contained" startIcon={<FullscreenIcon/>}>View</Button>
                <Button variant="outlined" endIcon={<SendIcon />}>Edit</Button>
              </Stack>
            </Card.Body>
          </Card>
          </div>
          <div className="t-card">
          <Card className="templateCard" style={{marginLeft: '17rem' }}>
            <Card.Body><br></br>
              <Card.Title style={{marginTop: '12rem'}}><b>College Template</b></Card.Title>
              <Stack spacing={2} direction="row" style={{marginLeft:'1rem',marginTop:'0.5rem'}}>
                <Button variant="contained" startIcon={<FullscreenIcon/>}>View</Button>
                <Button variant="outlined" endIcon={<SendIcon />}>Edit</Button>
              </Stack>
            </Card.Body>
          </Card>
          </div>
          <div className="t-card">
          <Card className="templateCard" style={{marginLeft: '34rem' }}>
            <Card.Body><br></br>
              <Card.Title style={{marginTop: '12rem'}}><b>University Template</b></Card.Title>
              <Stack spacing={2} direction="row" style={{marginLeft:'1rem',marginTop:'0.5rem'}}>
                <Button variant="contained" startIcon={<FullscreenIcon/>}>View</Button>
                <Button variant="outlined" endIcon={<SendIcon />}>Edit</Button>
              </Stack>
            </Card.Body>
          </Card>
          </div>
        </div>
      </div>
    </div>
   
    
  );
}

export default Templates;