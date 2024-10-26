// frontend/src/Components/EnhancedTemperatureConverter.js
import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Card,
    CardContent,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Fade,
} from '@mui/material';
import SnowflakeIcon from '@mui/icons-material/AcUnit'; // Snowflake for Celsius
import SunIcon from '@mui/icons-material/WbSunny'; // Sun for Fahrenheit
import ThermometerIcon from '@mui/icons-material/Opacity'; // Thermometer for Kelvin

const EnhancedTemperatureConverter = () => {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('Celsius');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (isNaN(temperature)) {
            setError('Please enter a valid number');
            return;
        }

        const response = await fetch('http://localhost:5000/convert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ temperature, scale }),
        });

        const data = await response.json();
        if (response.ok) {
            setResult(data);
        } else {
            setError(data.message);
        }
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
            <Card>
                <CardContent>
                    <Typography variant="h4" align="center" gutterBottom>
                        Temperature Converter
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Enter Temperature"
                            variant="outlined"
                            fullWidth
                            value={temperature}
                            onChange={(e) => setTemperature(e.target.value)}
                            error={!!error}
                            helperText={error}
                            margin="normal"
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Scale</InputLabel>
                            <Select
                                value={scale}
                                onChange={(e) => setScale(e.target.value)}
                            >
                                <MenuItem value="Celsius">
                                    <SnowflakeIcon /> Celsius
                                </MenuItem>
                                <MenuItem value="Fahrenheit">
                                    <SunIcon /> Fahrenheit
                                </MenuItem>
                                <MenuItem value="Kelvin">
                                    <ThermometerIcon /> Kelvin
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Convert
                        </Button>
                    </form>
                    <Fade in={!!result}>
                        <div>
                            {result && (
                                <div style={{ marginTop: '1rem' }}>
                                    <Typography variant="h6">Results:</Typography>
                                    <Typography>Celsius: {result.celsius}</Typography>
                                    <Typography>Fahrenheit: {result.fahrenheit}</Typography>
                                    <Typography>Kelvin: {result.kelvin}</Typography>
                                </div>
                            )}
                        </div>
                    </Fade>
                </CardContent>
            </Card>
        </Container>
    );
};

export default EnhancedTemperatureConverter;

