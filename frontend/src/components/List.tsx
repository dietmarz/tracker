import * as React from 'react';
import { Link } from 'react-router-dom';

const List: React.FC = () => {
    const data = [
        { ID: 1, Description: 'First item', Interval: 10, Url: 'http://example.com', XPath: '/html/body', Screenshot: true },
        { ID: 2, Description: 'Second item', Interval: 20, Url: 'http://example.com', XPath: '/html/body/div', Screenshot: false },
        // Weitere Dummy-Daten können hier hinzugefügt werden
    ];

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Interval</th>
                    <th>Url</th>
                    <th>XPath</th>
                    <th>Screenshot</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.ID}>
                        <td>{item.ID}</td>
                        <td>{item.Description}</td>
                        <td>{item.Interval}</td>
                        <td>{item.Url}</td>
                        <td>{item.XPath}</td>
                        <td>{item.Screenshot ? 'Yes' : 'No'}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                            <button>View</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Link to="/create"><button>Create</button></Link>
        </div>
    );
};

export default List;
