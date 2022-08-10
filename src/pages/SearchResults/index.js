import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import services from '../../services';
import {Box,Card, CardContent, Typography, Button, TextField, Grid, Container, AppBar, Toolbar, Stack, Chip} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const SearchResults = () => {
    const { searchText } = useParams();
    const [results, setResults] = useState([]);
    const callFetchSearch = async () => {
        const data = await services.searchByText(searchText);
        setResults(data.Search);
    }
    useEffect(() => {
        callFetchSearch(searchText);
        console.log(results);
    } , []);
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Search Results de: {searchText}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        {results.map((res, i) => (
            <Card variant='outlined' key={i} style={{marginTop:'30px', display:'flex'}}>
                <CardContent>
                    <img width={150} height={150} src={res.Poster} alt="" style={{borderRadius:'10px', objectFit:'cover'}}/>
                </CardContent>
                <CardContent>
                    <Typography variant='h5' fontWeight={'bold'}>
                        {res.Title}
                    </Typography>
                    <Typography variant='h6'>
                        {res.Year}
                    </Typography>
                    <Chip label={res.Type} variant={'outlined'} color='success'/>
                </CardContent>
            </Card>
        ))}
      </Container>

    </Box>
    );
}
export default SearchResults;