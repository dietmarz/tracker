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
import { Item, initialState } from "../model/Item.ts";

const Create: React.FC = () => {
    const [formData, setFormData] = useState<Item>(initialState);
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
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                />
                <TextField
                    label="Description"
                    fullWidth
                    margin="normal"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <TextField
                    label="Interval"
                    type="number"
                    fullWidth
                    margin="normal"
                    name="interval"
                    value={formData.interval}
                    onChange={handleChange}
                />
                <TextField
                    label="Url"
                    fullWidth
                    margin="normal"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                />
                <TextField
                    label="XPath"
                    fullWidth
                    margin="normal"
                    name="xpath"
                    value={formData.xpath}
                    onChange={handleChange}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={formData.screenshot}
                            onChange={handleChange}
                            name="screenshot"
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
