import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Dashboard = () => {
    return (
        <div>
            <Button variant="info">TEST</Button>
            {
              [
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
              ].map((variant, idx) => {
                return (
                  <Alert key={idx} variant={variant}>
                    This is a {variant} alert—check it out!
                  </Alert>
                )
              })
            }
        
        </div>
    );
}

export default Dashboard;
