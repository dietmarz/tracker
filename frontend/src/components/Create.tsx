import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    FormControlLabel,
    Checkbox
} from '@mui/material';

const Create: React.FC = () => {
    const [formData, setFormData] = useState({
        ID: 0,
        Description: '',
        Interval: 0,
        Url: '',
        XPath: '',
        Screenshot: false,
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = () => {
        // Hier können Sie den API-Call implementieren, um die Daten zu speichern
        console.log('Form data submitted:', formData);
        navigate('/list');
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    Create Item
                </Typography>
                <TextField
                    label="ID"
                    type="number"
                    fullWidth
                    margin="normal"
                    name="ID"
                    value={formData.ID}
                    onChange={handleChange}
                />
                <TextField
                    label="Description"
                    fullWidth
                    margin="normal"
                    name="Description"
                    value={formData.Description}
                    onChange={handleChange}
                />
                <TextField
                    label="Interval"
                    type="number"
                    fullWidth
                    margin="normal"
                    name="Interval"
                    value={formData.Interval}
                    onChange={handleChange}
                />
                <TextField
                    label="Url"
                    fullWidth
                    margin="normal"
                    name="Url"
                    value={formData.Url}
                    onChange={handleChange}
                />
                <TextField
                    label="XPath"
                    fullWidth
                    margin="normal"
                    name="XPath"
                    value={formData.XPath}
                    onChange={handleChange}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={formData.Screenshot}
                            onChange={handleChange}
                            name="Screenshot"
                            color="primary"
                        />
                    }
                    label="Screenshot"
                />
                <Box mt={2}>
                    <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Create;
