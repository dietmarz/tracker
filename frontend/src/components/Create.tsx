import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
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

interface CreateProps {
    mode?: 'create' | 'edit' | 'view';
}

const Create: React.FC<CreateProps> = ({ mode = 'create' }) => {
    const [formData, setFormData] = useState<Item>(initialState);
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const isViewMode = mode === 'view';

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Fetching data for ID:', id);
                const data = await getDataById(id);
                console.log('Data fetched successfully:', data);
                setFormData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (mode === 'edit' || mode === 'view') {
            fetchData();
        }
    }, [id, mode]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target;
        if (!isViewMode) {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value,
            });
        }
    };

    const handleSubmit = () => {
        if (mode === 'create') {
            // Implement API call to create data
            console.log('Form data created:', formData);
        } else if (mode === 'edit') {
            // Implement API call to update data
            console.log('Form data updated:', formData);
        }
        navigate('/list');
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    {mode.charAt(0).toUpperCase() + mode.slice(1)} Item
                </Typography>
                <TextField
                    label="ID"
                    type="number"
                    fullWidth
                    margin="normal"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    disabled={isViewMode}
                />
                <TextField
                    label="Description"
                    fullWidth
                    margin="normal"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    disabled={isViewMode}
                />
                <TextField
                    label="Interval"
                    type="number"
                    fullWidth
                    margin="normal"
                    name="interval"
                    value={formData.interval}
                    onChange={handleChange}
                    disabled={isViewMode}
                />
                <TextField
                    label="Url"
                    fullWidth
                    margin="normal"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                    disabled={isViewMode}
                />
                <TextField
                    label="XPath"
                    fullWidth
                    margin="normal"
                    name="xpath"
                    value={formData.xpath}
                    onChange={handleChange}
                    disabled={isViewMode}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={formData.screenshot}
                            onChange={handleChange}
                            name="screenshot"
                            color="primary"
                            disabled={isViewMode}
                        />
                    }
                    label="Screenshot"
                />
                {!isViewMode && (
                    <Box mt={2}>
                        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

// Dummy function to simulate data fetching
const getDataById = async (id: string | undefined): Promise<Item> => {
    // Replace with your actual data fetching logic
    return {
        id: parseInt(id || '0'),
        description: 'Sample description',
        interval: 10,
        url: 'http://example.com',
        xpath: '/html/body',
        screenshot: true,
    };
};

export default Create;
