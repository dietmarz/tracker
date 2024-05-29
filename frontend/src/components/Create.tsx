import * as React  from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <div>
                <label>ID:</label>
                <input type="number" name="ID" value={formData.ID} onChange={handleChange} />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" name="Description" value={formData.Description} onChange={handleChange} />
            </div>
            <div>
                <label>Interval:</label>
                <input type="number" name="Interval" value={formData.Interval} onChange={handleChange} />
            </div>
            <div>
                <label>Url:</label>
                <input type="text" name="Url" value={formData.Url} onChange={handleChange} />
            </div>
            <div>
                <label>XPath:</label>
                <input type="text" name="XPath" value={formData.XPath} onChange={handleChange} />
            </div>
            <div>
                <label>Screenshot:</label>
                <input type="checkbox" name="Screenshot" checked={formData.Screenshot} onChange={handleChange} />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Create;
