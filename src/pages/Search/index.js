import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import services from '../../services';
import {Box,Container,Grid, Typography, Button, TextField, Card, CardContent} from '@mui/material'

const Search = () => {
    const history = useNavigate();
    const [textInput, setTextInput] = useState('');
    
    function handleChange (e){
        setTextInput(e.target.value);
    }
    function searchButton (){
        if(textInput === ''){
            return;
        }
        history('/search/' + textInput);
    }
    

    return (
        <Container maxWidth='sm' sx={{marginTop:'50px'}}>
            <Card variant='outlined'>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h2">
                                OMBD Search
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                            onChange={handleChange}
                            fullWidth
                            id="outlined-basic" 
                            label="Nombre de serio / pelicula" 
                            variant="outlined" 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button 
                            onClick={searchButton}
                            sx={{
                                height:'100%'
                            }}
                            variant="contained" 
                            fullWidth
                            >
                                Buscar
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>

            </Card>
            
        </Container>
    );
}
// return (
//     <Container maxWidth="sm">
//         <Grid container mt={3}>
//             <Grid item xs={12}>
//                 <Card fullWidth>
//                     <CardContent>
//                         < variant="h2">OMDB Search</   Typography>
//                         <Stack
//                             mt={2}
//                             direction="row"
//                             justifyContent="space-between"
//                             spacing={2}
//                         >
//                             <TextField
//                                 fullWidth
//                                 label="Movie or tv show..."
//                             />
//                             <Button variant="contained" fullWidth>
//                                 Search
//                             </Button>
//                         </Stack>
//                     </CardContent>
//                 </Card>
//             </Grid>
//         </Grid>
//     </Container>
// );
export default Search;