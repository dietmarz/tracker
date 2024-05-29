import * as React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Box,
    Typography
} from '@mui/material';

const List: React.FC = () => {
    const data = [
        { ID: 1, Description: 'First item', Interval: 10, Url: 'http://example.com', XPath: '/html/body', Screenshot: true },
        { ID: 2, Description: 'Second item', Interval: 20, Url: 'http://example.com', XPath: '/html/body/div', Screenshot: false },
        // Weitere Dummy-Daten können hier hinzugefügt werden
    ];

    return (
        <Container>
            <Box mt={5} mb={2}>
                <Typography variant="h4" gutterBottom>
                    Item List
                </Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Interval</TableCell>
                            <TableCell>Url</TableCell>
                            <TableCell>XPath</TableCell>
                            <TableCell>Screenshot</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow key={item.ID}>
                                <TableCell>{item.ID}</TableCell>
                                <TableCell>{item.Description}</TableCell>
                                <TableCell>{item.Interval}</TableCell>
                                <TableCell>{item.Url}</TableCell>
                                <TableCell>{item.XPath}</TableCell>
                                <TableCell>{item.Screenshot ? 'Yes' : 'No'}</TableCell>
                                <TableCell>
                                    <Button variant="contained" size="small" style={{ marginRight: 8 }}>
                                        Edit
                                    </Button>
                                    <Button variant="contained" size="small" style={{ marginRight: 8 }}>
                                        Delete
                                    </Button>
                                    <Button variant="contained" size="small">
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box mt={2}>
                <Button component={Link} to="/create" variant="contained" color="primary" >
                    Create
                </Button>
            </Box>
        </Container>
    );
};

export default List;
